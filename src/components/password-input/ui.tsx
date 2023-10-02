import { TextInput } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";
import { IconAlertCircleFilled } from "@tabler/icons-react";

export function PasswordInput() {
  const form = useUserFormContext();
  const passwordError = form.errors.password;
  return (
    <TextInput
      classNames={classes}
      size="xl"
      radius="md"
      label="Password"
      placeholder="Enter password"
      description={passwordError ? "" : "Your password is between 4 and 12 characters"}
      rightSection={
        passwordError && <IconAlertCircleFilled style={{ color: "var(--mantine-color-error)" }} />
      }
      {...form.getInputProps("password")}
    />
  );
}
