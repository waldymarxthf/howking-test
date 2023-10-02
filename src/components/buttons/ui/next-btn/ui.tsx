import { Button } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../../../context/form-context";

export function NextButton() {
  const form = useUserFormContext();

  return (
    <form onSubmit={form.onSubmit((value) => alert(JSON.stringify(value, null, 2)))}>
      <Button
        type="submit"
        size="lg"
        w={172}
        classNames={classes}
        radius="md"
        variant="filled"
        disabled={!form.isValid()}
      >
        Next
      </Button>
    </form>
  );
}
