<template>
	<v-navigation-drawer v-model="sideBarDrawer" app temporary>
		<v-list dense>
			<v-list-item
				v-for="(menu, menuIdx) in sideMenus"
				:key="menuIdx"
				link
				@click="setRouter(menu.router)"
			>
				<v-list-item-action>
					<v-icon>{{menu.icon}}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>{{menu.name}}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "sideBar",
	data: () => ({
		sideMenus: [
			{
				name: "Home",
				icon: "mdi-home",
				router: "/"
			},
			{
				name: "Accounts",
				icon: "mdi-pig-variant",
				router: "/account"
			}
		]
	}),
	computed: {
		...mapGetters({
			sideBarDrawerFromStore: "sideBarDrawer"
		}),
		sideBarDrawer: {
			get() {
				return this.sideBarDrawerFromStore;
			},
			set(newDrawer) {
				this.setSideBarDrawer(newDrawer);
				return
			}
		}
	},
	methods: {
		...mapActions(["setRouter", 'setSideBarDrawer'])
	}
};
</script>


