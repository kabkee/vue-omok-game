<template>
	<v-app id="inspire">
		<!-- <side-bar></side-bar> -->

		<!-- <v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon v-if="isTopPath" @click.stop="onClickSideBarDrawer()" />
			<v-btn icon v-if="!isTopPath" @click.stop="setRouter('/')">
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>
			<v-toolbar-title>{{ currentRouteName | capitalize }}</v-toolbar-title>

			<v-spacer></v-spacer> -->

			<!-- <v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>-->
			<!-- <v-menu transition="slide-y-transition" bottom offset-y>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item-group v-model="item" color>
						<v-list-item v-if="!isAuthed" @click="setRouter('/login')">
							<v-list-item-icon>
								<v-icon>question_answer</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>Log In</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item v-if="isAuthed" @click="logout()">
							<v-list-item-icon>
								<v-icon>mdi-exit-to-app</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>Log Out</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-menu> -->
		<!-- </v-app-bar> -->

		<v-content>
			<v-container class="fill-height" fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import sideBar from "./components/sideBar";

export default {
	props: {
		source: String
	},
	components: {
		// sideBar
	},
	data: () => ({
		item: null,
	}),
	mounted(){
	},
	computed: {
		...mapGetters(['currentRoute']),
		sideBarDrawer: {
			get() {
				return this.sideBarDrawerFromStore;
			},
			set(newDrawer) {
				return newDrawer
			}
		},
		currentRouteName() {
			let currentRouteName = this.currentRoute.name;
			if(currentRouteName == 'home'){
				currentRouteName = '오목게임'
			}
			return currentRouteName;
		},
		isTopPath() {
			return this.currentRoute.path == "/";
		},
		
	},
	methods: {
		...mapActions([]),
	}
};
</script>
