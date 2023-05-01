import { defineStyleConfig } from "@chakra-ui/react";
import { withTheme } from "@emotion/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "10px",
  },
  variants: {
    outline: {
      border: "none",
      _hover: "",
      _focus: "",
      _loading: { opacity: 0.8 },
      _active: { opacity: 0.85, bg: "" },
      rounded: "10px",
      color: "white",
      height: "50px",
      fontSize: "18px",
      //  px: "50%",
      py: "30px",
      backdropFilter: "blur(10px)",
      bg: "rgb(0,0,0,25%)",
    },
  },
  defaultProps: {
    variant: "outline",
  },
});

export const InputSelectStyle = defineStyleConfig({
  baseStyle: {
    field: {
      border: { start: "2px transparent solid", md: "none" },
      bg: "rgb(0,0,0,50%)",
      focusBorderColor: "transparent",
      //rounded: "full",
      // borderRadius: "full",
      p: "30px",
      // border: "2px solid green",
    },
  },
  variants: {
    variants: {
      filled: {
        field: {
          p: "30px",
          border: "2px transparent solid ",
        },
      },
    },
  },
  defaultProps: {
    variant: "variants",
  },
});
