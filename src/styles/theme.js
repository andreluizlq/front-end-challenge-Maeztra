import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#353535",
        },
        secondary: {
            main: "#FAA500",
        },
    },
    typography: {
        fontFamily: ["Titillium Web", "sans-serif"].join(","),
    },
});

export default theme;
