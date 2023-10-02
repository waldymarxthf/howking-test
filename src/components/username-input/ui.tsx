import { TextInput } from "@mantine/core";
import { IconAlertCircleFilled } from "@tabler/icons-react";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";

export function UsernameInput() {
  const form = useUserFormContext();
  const usernameError = form.errors.username;

  return (
    <TextInput
      classNames={classes}
      size="xl"
      radius="md"
      label="Username"
      placeholder="Enter username"
      rightSection={
        usernameError && <IconAlertCircleFilled style={{ color: "var(--mantine-color-error)" }} />
      }
      {...form.getInputProps("username")}
    />
  );
}
