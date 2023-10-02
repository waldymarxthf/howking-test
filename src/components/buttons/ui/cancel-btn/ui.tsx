import { Button } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../../../context/form-context";

export function CancelButton() {
  const form = useUserFormContext();
  return (
    <Button
      onClick={form.reset}
      size="lg"
      w={172}
      classNames={classes}
      radius="md"
      variant="outline"
    >
      Cancel
    </Button>
  );
}
