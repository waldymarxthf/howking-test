import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Forms } from "./pages";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Forms />
    </MantineProvider>
  );
}
