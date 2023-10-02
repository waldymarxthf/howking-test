import { useCombobox, Combobox, InputBase, Input } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classes from "./ui.module.css";
import { useUserFormContext } from "../../context/form-context";

const groceries = ["Dropdown option", "Dropdown option 1", "Dropdown option 2"];

export function DropdownTitle() {
  const form = useUserFormContext();
  const value = form.values.dropdownTitle;
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === "keyboard") {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex("active");
      }
    },
  });

  const options = groceries.map((item) => (
    <Combobox.Option
      value={item}
      classNames={{ option: classes.option }}
      key={item}
      active={item === value}
    >
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      offset={0}
      position="bottom"
      size="lg"
      radius="md"
      resetSelectionOnOptionHover
      withinPortal={false}
      transitionProps={{ duration: 200, transition: "pop" }}
      onOptionSubmit={(val) => {
        form.setFieldValue("dropdownTitle", val);
        combobox.updateSelectedOptionIndex("active");
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          radius="md"
          size="lg"
          pointer
          classNames={{ input: classes.input }}
          rightSection={
            combobox.dropdownOpened ? (
              <IconChevronUp size="0.9rem" />
            ) : (
              <IconChevronDown size="0.9rem" />
            )
          }
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown className={classes.dropdown}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
