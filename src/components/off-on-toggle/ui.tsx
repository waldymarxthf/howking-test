import { Switch } from "@mantine/core";
import classes from "./ui.module.css";
import "../../global.css";
import { useUserFormContext } from "../../context/form-context";

export function SwitchOnOff() {
  const form = useUserFormContext();
  const value = form.values.isToggleOn;
  const switchError = form.errors.isToggleOn;

  return (
    <Switch
      checked={value}
      onChange={(event) => form.setFieldValue("isToggleOn", event.target.checked)}
      classNames={classes}
      size="md"
      label={value ? "On" : "Off"}
      error={switchError}
    />
  );
}
