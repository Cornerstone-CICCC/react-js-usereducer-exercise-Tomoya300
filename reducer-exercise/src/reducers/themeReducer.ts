
type ThemeState = {
    isDark: boolean;
    fSize: number;
}

type ThemeAction = {
    type: "toggle" | "increase" | "decrease";
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "toggle":
            return {isDark: !state.isDark, fSize: state.fSize};
        case "increase":
            return {isDark: state.isDark, fSize: state.fSize + 1};
        case "decrease":
            return {isDark: state.isDark, fSize: state.fSize - 1};
        default:
            return state;
    }
}

export default themeReducer;