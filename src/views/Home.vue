<template>
	<v-container class="fill-height" fluid>
		<!-- <v-alert
			:value="dialog"
			color="pink"
			dark
			border="top"
			icon="mdi-home"
			transition="scale-transition"
		>
			Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
			Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
		</v-alert>-->
		<v-row align="center" justify="center">
			<v-col cols="2" sm="12" md="2" class="dashboard">
				<v-card class="elevation-12">
					<v-card-title>
						오목게임
						<v-spacer></v-spacer>
						<v-btn color="error" v-if="isGameStarted" @click="abortGameConfirm()">중단</v-btn>
						<v-btn color="primary" v-if="!isGameStarted" @click="startGame()">시작</v-btn>
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<!-- <p class='custom-label'>다음 차례</p> -->
						<v-radio-group v-model="isBlackStoneNumb" label="다음 차례" row>
							<v-layout>
								<v-radio label value="1" disabled>
									<template v-slot:label>
										<div class="radio blackStone stone"></div>
									</template>
								</v-radio>
								<v-radio label value="0" disabled>
									<template v-slot:label>
										<div class="radio whiteStone stone"></div>
									</template>
								</v-radio>
							</v-layout>
						</v-radio-group>
						<v-divider></v-divider>
						<v-select
							v-model="oMokRowCount"
							:items="oMokRowCounts"
							:rules="[rules.oMokRowCount]"
							color="blue"
							label="오목판 칸 갯수"
							@input="onChangeOMokRowCount"
							:disabled="isGameStarted"
						></v-select>
						<v-container>
							<p>설정</p>
							<v-switch v-model="allowShowStoneNumber" :label="`돌 번호표기`"></v-switch>
							<v-switch v-model="allowRollBack" :label="`한수 무르기 허용`" :disabled="isGameStarted"></v-switch>
							<v-switch
								v-model="restrictOnlyBlack"
								:label="restrictOnlyBlack?`흑돌만 제한룰`:`흑&흰돌 모두 제한 `"
								:disabled="isGameStarted"
							></v-switch>
						</v-container>
						<v-divider></v-divider>
						<v-container>
							<p>제한룰</p>
							<v-switch v-model="restrict33" :label="`3 x 3 제한`" :disabled="isGameStarted"></v-switch>
							<v-switch v-model="restrict34" :label="`3 x 4 제한`" :disabled="isGameStarted"></v-switch>
							<v-switch v-model="restrict6" :label="`6 제한`" :disabled="isGameStarted"></v-switch>
						</v-container>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col :cols="oMokRowCount==15?5:6" sm="12" :md="oMokRowCount==15?5:6" class="dashboard">
				<v-card class="elevation-12" style="overflow: hidden;">
					<v-card-text>
						<div style='waterMarkWrap' v-if='!isGameStarted'>
						<div class="waterMark one">연습 모드</div>
						<div class="waterMark two">연습 모드</div>
						<div class="waterMark">연습 모드</div>
						<div class="waterMark four">연습 모드</div>
						<div class="waterMark five">연습 모드</div>
						<div class="waterMark six">연습 모드</div>
						<div class="waterMark seven">연습 모드</div>
						</div>
						
						<div class="board">
							<div
								class="board-row"
								:class="`board-row-${rowNumbIdx+1}`"
								v-for="(rowNumb, rowNumbIdx) in oMokRowCount"
								:key="`row_${rowNumbIdx+1}`"
							>
								<div
									class="board-col"
									:class="[`board-col-${colNumbIdx+1}`, getStoneColor(getPositionNumb(rowNumb, colNumb))]"
									v-for="(colNumb, colNumbIdx) in oMokRowCount"
									:key="`col_${colNumbIdx+1}`"
									@click="onClickBoard(rowNumb, colNumb)"
								>
									<div
										v-if="allowShowStoneNumber && getStoneNumber(rowNumb, colNumb)"
										class="stoneNumber"
									>{{getStoneNumber(rowNumb, colNumb)}}</div>
									<div class="col_grid"></div>
								</div>
							</div>
						</div>
					</v-card-text>
					<v-card-actions>
						<v-btn
							color="warning"
							@click="onClickRollBackLastStone"
							v-if="allowRollBack"
							:disabled="!allowRollBack || !stoneHistory.length"
						>
							<v-icon>mdi-arrow-left</v-icon>한수 무르기
						</v-btn>
						<v-spacer></v-spacer>
						<v-btn
							color="error"
							@click="clearBoard()"
							v-if="!isGameStarted"
							:disabled="isGameStarted || (!blackStones.length && !whiteStones.length)"
						>
							<v-icon>mdi-border-clear</v-icon>보드 지우기
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-dialog v-model="dialog" max-width="500px">
			<v-card dark>
				<v-card-title>
					<span>알림</span>
				</v-card-title>
				<v-card-text class="title">
					<div
						v-if="isGameWon"
						class="radio stone inDialog"
						:class="[isBlackStone==1?'whiteStone':'blackStone']"
					></div>
					{{dialogMsg}}
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false">닫기</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog dark v-model="dialogConfirm" max-width="500px">
			<v-card>
				<v-card-title>
					<span>확인</span>
				</v-card-title>
				<v-card-text class="title">{{dialogConfirmMsg}}</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color text @click="dialogConfirm = false">닫기</v-btn>
					<v-btn color="success" @click="abortGame()">확인</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog dark v-model="dialogConfirmClearBoard" max-width="500px">
			<v-card>
				<v-card-title>
					<span>확인</span>
				</v-card-title>
				<v-card-text class="title">{{dialogConfirmClearBoardMsg}}</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color text @click="dialogConfirmClearBoard = false">닫기</v-btn>
					<v-btn color="error" @click="clearBoard(true)">지우기</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-snackbar v-model="snackbar">
			그 자리에 놓을 수 없습니다!
			<v-btn color="pink" text @click="snackbar = false">닫기</v-btn>
		</v-snackbar>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// mapGetters,

export default {
	name: "home",
	components: {},
	data: () => {
		return {
			snackbar: false,
			dialog: false,
			dialogMsg: "",
			dialogConfirm: false,
			dialogConfirmMsg: "",
			dialogConfirmClearBoard: false,
			dialogConfirmClearBoardMsg: "",
			isGameStarted: false,
			isGameWon: false,
			isBlackStone: true,
			blackStones: [],
			whiteStones: [],
			gameBoardTAble: [],
			stoneHistory: [],
			oMokRowCount: 15,
			oMokRowCounts: [15, 19],
			inspectDirection: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
			moveXYPair: [
				{ x: 0, y: -1 },
				{ x: 1, y: -1 },
				{ x: 1, y: 0 },
				{ x: 1, y: 1 },
				{ x: 0, y: 1 },
				{ x: -1, y: 1 },
				{ x: -1, y: 0 },
				{ x: -1, y: -1 }
			],
			inRowCounter: [],
			restrictOnlyBlack: true,
			restrict33: true,
			restrict34: true,
			restrict6: true,
			allowRollBack: true,
			allowShowStoneNumber: false,
			rules: {
				oMokRowCount: val => {
					return parseInt(val) == 15 || parseInt(val) == 19;
				}
			}
		};
	},
	watch: {},
	mounted() {
		this.initGame();
	},
	computed: {
		...mapGetters([]),
		// isWhiteStone() {
		// 	return !this.isBlackStone;
		// }
		isBlackStoneNumb() {
			if (this.isBlackStone) {
				return "1";
			} else {
				return "0";
			}
		}
	},
	methods: {
		...mapActions([]),
		initGame() {
			for (let i = 0; i < this.oMokRowCount; i++) {
				this.gameBoardTAble[i] = [];
				for (let j = 0; j < this.oMokRowCount; j++) {
					this.gameBoardTAble[i][j] = undefined;
				}
			}
			this.isBlackStone = true;
			this.blackStones = [];
			this.whiteStones = [];
			this.stoneHistory = [];
			this.isGameStarted = false;
			this.isGameWon = false;
		},
		triggerDialog(msg, timeout) {
			if (!msg) msg = "게임을 시작합니다.";
			if (timeout === undefined) timeout = 2500;
			if (!timeout) timeout = 1000 * 60 * 60 * 24 * 365; // 1년
			this.dialog = true;
			this.dialogMsg = msg;
			setTimeout(
				function() {
					this.dialog = false;
				}.bind(this),
				timeout
			);
		},
		abortGameConfirm(confirmMsg) {
			if (this.isGameStarted) {
				confirmMsg = confirmMsg
					? confirmMsg
					: "게임이 중단 됩니다. 신중하게 중단하세요.";
				this.dialogConfirmMsg = confirmMsg;
				this.dialogConfirm = true;

				// this.dialogConfirmMsg = '신중하게 중단하세요. 되돌릴 수 없습니다.';
				// if(!confirm('게임이 중단 됩니다. 신중하게 중단하세요.')){
				// 	return;
				// }
				// if(!confirm('신중하게 중단하세요. 되돌릴 수 없습니다.')){
				// 	return;
				// }
			}
		},
		abortGame() {
			this.dialogConfirm = false;
			this.isGameStarted = false;
		},
		clearBoardConfirm(confirmMsg) {
			confirmMsg = confirmMsg
				? confirmMsg
				: "모든 기록이 지워집니다. 진행하시겠습니까?";
			this.dialogConfirmClearBoardMsg = confirmMsg;
			this.dialogConfirmClearBoard = true;
		},
		clearBoard(force) {
			if (force) {
				this.dialogConfirmClearBoard = false;
			} else {
				if (this.blackStones.length || this.whiteStones.length) {
					this.clearBoardConfirm();
					return;
				}
			}
			this.blackStones = [];
			this.whiteStones = [];
			this.stoneHistory = [];
			this.isBlackStone = true;
		},
		startGame() {
			this.initGame();
			this.isGameStarted = true;

			this.triggerDialog();
		},
		initInRowTable() {
			this.inRowCounter = [];
			for (let i = 1; i <= 10; i++) {
				this.inRowCounter[i] = 0;
			}
		},
		getStoneColor(positionNumb) {
			let stoneColor = "";
			if (this.blackStones.includes(positionNumb)) {
				stoneColor = "blackStone";
			} else if (this.whiteStones.includes(positionNumb)) {
				stoneColor = "whiteStone";
			}
			return stoneColor;
		},
		getPositionNumb(rowNumb, colNumb) {
			return (rowNumb - 1) * this.oMokRowCount + colNumb;
		},
		getStoneNumber(rowNumb, colNumb) {
			if (!this.allowShowStoneNumber) return;
			let positionNumb = this.getPositionNumb(rowNumb, colNumb);

			for (let [idx, stone] of this.stoneHistory.entries()) {
				if (stone.position == positionNumb) {
					return idx + 1;
				}
			}
			return false;
		},
		getEmptyStone(positionNumb) {
			if (
				!this.blackStones.includes(positionNumb) &&
				!this.whiteStones.includes(positionNumb)
			) {
				return true;
			}
			return false;
		},
		countInRow(x, y, stone, directionIdx) {
			// x, y, stone, direction
			if (x < 0 || y < 0 || x >= this.oMokRowCount || y >= this.oMokRowCount)
				return 0;
			else if (this.gameBoardTAble[x][y] === undefined) return 0;
			else if (this.gameBoardTAble[x][y] !== stone) return 200;
			else {
				return (
					1 +
					this.countInRow(
						x + this.moveXYPair[directionIdx].x,
						y + this.moveXYPair[directionIdx].y,
						stone,
						directionIdx
					)
				);
			}
		},
		isWon() {
			// 이기는데 필요한 돌 : 다섯 개
			if (this.inRowCounter[5] >= 1) return true;
			return false;
		},
		isNotValidPlacing() {
			// 돌을 놓을 수 없는 조건 검사 : 6개 돌일 경우, (3,3) (3,4)
			if (this.restrict6) {
				if (this.restrictOnlyBlack && !this.isBlackStone) {
					return false;
				}
				for (let i = 6; i < this.inRowCounter.length; i++) {
					if (this.inRowCounter[i] >= 1) {
						return true;
					}
				}
			}

			if (this.restrict33) {
				if (this.restrictOnlyBlack && !this.isBlackStone) {
					return false;
				}
				if (this.inRowCounter[3] >= 2) return true;
			}

			if (this.restrict34) {
				if (this.restrictOnlyBlack && !this.isBlackStone) {
					return false;
				}
				if (this.inRowCounter[3] >= 1 && this.inRowCounter[4] >= 1) return true;
			}

			return false;
		},
		isBoardFull() {
			for (let i = 0; i < this.oMokRowCount; i++) {
				for (let j = 0; j < this.oMokRowCount; j++) {
					if (this.gameBoardTAble[i][j] == undefined) {
						return false;
					}
				}
			}
			return true;
		},
		verifyPlaceStone(x, y, stone) {
			this.initInRowTable();

			for (let i = 0; i < this.inspectDirection.length / 2; i++) {
				/* console.info(
					"Debug / verifyPlaceStone :: ",
					x,
					y,
					this.countInRow(x, y, stone, i),
					this.countInRow(x, y, stone, (i + 4) % 8),
					this.countInRow(x, y, stone, i) +
						this.countInRow(x, y, stone, (i + 4) % 8) -
						1,
					i,
					(i + 4) % 8
				); */
				let v =
					this.countInRow(x, y, stone, i) +
					this.countInRow(x, y, stone, (i + 4) % 8) -
					1;

				// console.info("Debug / v :: ", v);

				// 200 은 흰돌을 만났을 때, 카운트 하지 않기 위함.
				if (v % 200 == 5) v = 5;
				if (v < 200) this.inRowCounter[v] += 1;
				if (this.isNotValidPlacing()) {
					return {
						end: false,
						invalid: true,
						x,
						y,
						stone
					};
				} else if (this.isWon()) {
					return { end: true, win: stone };
				}
			}
			// console.info('Debug / this.inRowCounter :: ', this.inRowCounter);
			return {
				end: false,
				invalid: false
			};
		},
		onClickBoard(rowNumb, colNumb) {
			let positionNumb = this.getPositionNumb(rowNumb, colNumb);
			rowNumb -= 1;
			colNumb -= 1;

			if (!this.getEmptyStone(positionNumb)) {
				return;
			}
			if (this.isBlackStone) {
				this.blackStones.push(positionNumb);
			} else {
				this.whiteStones.push(positionNumb);
			}
			this.stoneHistory.push({
				isBlackStone: this.isBlackStone,
				x: rowNumb,
				y: colNumb,
				position: positionNumb
			});

			let lIsBlackStone = this.isBlackStone ? 1 : 2;
			this.gameBoardTAble[rowNumb][colNumb] = lIsBlackStone;

			if (this.isGameStarted) {
				let validResult = this.verifyPlaceStone(
					rowNumb,
					colNumb,
					lIsBlackStone
				);
				if (validResult.end) {
					if (validResult.win !== null) {
						this.isGameWon = true;
						this.isGameStarted = false;
						setTimeout(
							function() {
								this.triggerDialog(
									`${validResult.win == 1 ? "흑돌" : "흰돌"}이 이겼습니다!`,
									false
								);
							}.bind(this),
							50
						);
					}
				} else {
					if (validResult.invalid) {
						if (this.isBlackStone) {
							this.blackStones.splice(
								this.blackStones.indexOf(positionNumb),
								1
							);
						} else {
							this.whiteStones.splice(
								this.whiteStones.indexOf(positionNumb),
								1
							);
						}
						this.stoneHistory.splice(this.stoneHistory.length - 1, 1);

						// console.info('Debug / this.blackStones, positionNumb :: ', this.blackStones, positionNumb);
						this.gameBoardTAble[rowNumb][colNumb] = undefined;
						this.snackbar = true;
						return;
					}
				}
			}

			// 게임이 시작되지 않으면 마구 놓을 수 있도록 한다.
			if (this.isBoardFull()) {
				if (!this.isGameStarted) {
					if (this.oMokRowCount == 15) {
						this.triggerDialog(
							`이걸 다 채우다니!! 정말 대단한데?! 이것도 할 수 있을까?`,
							false
						);
						this.oMokRowCount = 19;
					} else {
						this.triggerDialog(
							`다음엔 이것보다 더 큰 바둑판을 준비 해야겠군요!!`,
							false
						);
					}
					this.initGame();
				} else {
					this.triggerDialog(`이걸 다 채우다니!! 무승부 입니다!`, false);
				}
				return;
			}

			this.isBlackStone = !this.isBlackStone;

			// console.info('Debug / this.gameBoardTAble :: ', this.gameBoardTAble);
		},
		onChangeOMokRowCount() {
			this.initGame();
		},
		onClickRollBackLastStone() {
			var deletedStone = this.stoneHistory.splice(
				this.stoneHistory.length - 1,
				1
			)[0];
			if (deletedStone.isBlackStone) {
				this.blackStones.splice(
					this.blackStones.indexOf(deletedStone.position),
					1
				);
			} else {
				this.whiteStones.splice(
					this.whiteStones.indexOf(deletedStone.position),
					1
				);
			}
			this.isBlackStone = deletedStone.isBlackStone;
		}
	}
};
</script>



<style scoped>
.custom-label {
	font-size: 16px;
	transform: scale(0.75) translateY(24px);
	color: #999;
	margin-left: -25px;
}
.dashboard {
	align-self: baseline;
}
.board {
	width: 100%;
	margin: 0 auto;
	background-color: #ffc078;
}

.board-row {
	display: flex;
}

.board-col {
	position: relative;
	flex-grow: 1;
	cursor: pointer;
}

.board-col:hover {
	background-color: #fd7e14;
}

.board-col::before {
	display: block;
	content: "";
	padding-bottom: 100%;
}

.board-col::after {
	position: absolute;
	display: block;
	content: "";
	padding-bottom: 80%;
	width: 80%;
	top: 10%;
	left: 10%;
	border-radius: 50%;
}

.radio.stone {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid;
}
.radio.stone.blackStone,
.board-col.blackStone::after {
	background-color: black;
	box-shadow: 3px 3px 3px 1px;
}

.radio.stone.whiteStone,
.board-col.whiteStone::after {
	background-color: white;
	box-shadow: 3px 3px 3px 1px;
}
.radio.stone.inDialog {
	display: inline-block;
	margin-right: 1em;
	vertical-align: middle;
	box-shadow: 2px 2px 2px 2px #545454;
}

.col_grid {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.col_grid::after {
	display: block;
	content: "";
	position: absolute;
	top: 0;
	right: calc(50% - 1px);
	bottom: calc(50% - 1px);
	left: 0;
	border-right: 1px solid black;
	border-bottom: 1px solid black;
	box-sizing: border-box;
}

.col_grid::before {
	display: block;
	content: "";
	position: absolute;
	top: calc(50%);
	right: -1px;
	bottom: -1px;
	left: calc(50%);
	border-top: 1px solid black;
	border-left: 1px solid black;
	box-sizing: border-box;
}

.board-row:first-child .col_grid::after {
	border-top: none;
	border-left: none;
	border-right: none;
}

.board-row:last-child .col_grid::before {
	border-bottom: none;
	border-left: none;
	border-right: none;
}

.board-col:first-child .col_grid::after {
	border-top: none;
	border-left: none;
	border-bottom: none;
}

.board-col:last-child .col_grid::before {
	border-top: none;
	border-bottom: none;
	border-right: none;
}
.board-col .stoneNumber {
	top: 0;
	position: absolute;
	color: #fff;
	z-index: 1;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 2.5;
}
.board-col.whiteStone .stoneNumber {
	color: #000;
}

.waterMark {
	position: absolute;
	width: 100%;
	text-align: center;
	font-size: 8em;
	top: 50%;
	transform: rotateZ(-45deg) translateY(-50%);
	opacity: 0.15;
}
.waterMark.two {
	top: 0;
	left: 5%;
}
.waterMark.seven {
	top: 0;
	left: 55%;
}
.waterMark.one {
	top: 50%;
	left: -50%;
}
.waterMark.four {
	top: 50%;
	left: 50%;
}
.waterMark.five {
	top: 100%;
	left: -5%;
}
.waterMark.six {
	top: 100%;
    left: -50%;
}
</style>
