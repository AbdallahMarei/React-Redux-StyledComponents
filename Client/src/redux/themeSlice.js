import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: JSON.parse(localStorage.getItem('darkMode')),
	colors: JSON.parse(localStorage.getItem('colors')) || {
		navColor: "#007dfc",
		bodyColor: "#fff",
		cardColor: "#f3f3f3",
		fontColor: "#000",
		hoverFontColor: "#f3f3f3",
	}
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.darkMode = !state.darkMode
			if (state.darkMode) {
				state.colors.navColor = "#000";
				state.colors.bodyColor = "#445155";
				state.colors.cardColor = "#242424";
				state.colors.fontColor = "#fff";
				state.colors.hoverFontColor = "#737373";
			} else {
				state.colors.navColor = "#007dfc";
				state.colors.bodyColor = "#fff";
				state.colors.cardColor = "#f3f3f3";
				state.colors.fontColor = "#000";
				state.colors.hoverFontColor = "#f3f3f3";
			};
			localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
			localStorage.setItem('colors', JSON.stringify(state.colors));
		}
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
