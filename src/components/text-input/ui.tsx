import { TextInput } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";
import { IconAlertCircleFilled } from "@tabler/icons-react";

export function InputTextLabel() {
  const form = useUserFormContext();
  const textLabelError = form.errors.textLabel;
  return (
    <TextInput
      classNames={classes}
      size="xl"
      radius="md"
      label="Input Text Label"
      placeholder="Enter text"
      rightSection={
        textLabelError && <IconAlertCircleFilled style={{ color: "var(--mantine-color-error)" }} />
      }
      {...form.getInputProps("textLabel")}
    />
  );
}
