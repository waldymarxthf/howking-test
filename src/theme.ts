import { MantineColorsTuple, createTheme } from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#f0eaff",
  "#d9d1ff",
  "#b09ffd",
  "#8569fa",
  "#603cf8",
  "#4920f7",
  "#3c10f8",
  "#2e06dd",
  "#2703c6",
  "#1d00af",
];

export const theme = createTheme({
  primaryShade: 4,
  primaryColor: "myColor",
  colors: {
    myColor,
  },
  fontFamily: "Noto Sans",
});
