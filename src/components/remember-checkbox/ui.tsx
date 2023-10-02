import { Checkbox } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";

export function RememberCheckbox() {
  const form = useUserFormContext();
  return (
    <Checkbox
      size="md"
      radius="md"
      classNames={classes}
      label="Remember me"
      {...form.getInputProps("rememberMe")}
    />
  );
}
