import { Flex, Radio } from "@mantine/core";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";

const radioItems = ["Radio selection 1", "Radio selection 2", "Radio selection 3"];

export function SelectionRadio() {
  const form = useUserFormContext();
  const selectionRadioError = form.errors.radioSelection;

  return (
    <Radio.Group
      value={form.values.radioSelection}
      onChange={(event) => form.setFieldValue("radioSelection", event)}
      error={selectionRadioError}
      classNames={{ error: classes.error }}
    >
      <Flex direction="column" gap={32}>
        {radioItems.map((item, index) => (
          <Radio
            classNames={classes}
            size="md"
            label={item}
            value={item}
            key={index}
            error={!!selectionRadioError}
          />
        ))}
      </Flex>
    </Radio.Group>
  );
}
