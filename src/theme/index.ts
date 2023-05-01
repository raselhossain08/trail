import { extendTheme } from "@chakra-ui/react";
import { Button, InputSelectStyle } from "./main.component";

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Open Sans', sans-serif;",
        m: "0",
        p: "0",
        top: "0",
        pos: "relative",
        bg: "#000000",
        fontSize: "16px",
        color: "#F2F2F2",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "white",
          borderRadius: "24px",
        },
      },
    },
  },
  colors: {
    black: { 0: "rgb(0,0,0,25%)" },
    blue: "#0049AC",
    red: {
      0: "#460000",
      1: "#FF5050",
    },
  },

  components: {
    Button,
    Input: InputSelectStyle,
  },
  breakpoints: {
    start: "0px",
    sm: "320px",
    mds: "480px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
