import { Container, Flex } from "@mantine/core";
import { isNotEmpty, hasLength } from "@mantine/form";
import { UsernameInput } from "../components/username-input";
import { PasswordInput } from "../components/password-input";
import { InputTextLabel } from "../components/text-input";
import { RememberCheckbox } from "../components/remember-checkbox";
import { SwitchOnOff } from "../components/off-on-toggle";
import { SelectionRadio } from "../components/selection-radio";
import { DropdownTitle } from "../components/title-dropdown";
import { ButtonGroup } from "../components/buttons";
import { UserFormProvider, useUserForm } from "../context/form-context";

const formErrors = {
  usernameError: "Name must be at least 2 characters long",
  passwordError: "Password must be between 4 and 12 characters",
  textLabelError: "Text label is required",
  rememberMeError: "Remember me is required",
  isToggleOnError: "Is toggle on is required",
  radioSelectionError: "Radio selection is required",
  dropdownTitleError: "Dropdown title is required",
};

const initialValues = {
  username: "",
  password: "",
  textLabel: "",
  rememberMe: false,
  isToggleOn: false,
  radioSelection: "",
  dropdownTitle: "Dropdown option",
};

const validationRules = {
  username: hasLength({ min: 2 }, formErrors.usernameError),
  password: hasLength({ min: 4, max: 12 }, formErrors.passwordError),
  textLabel: isNotEmpty(formErrors.textLabelError),
  rememberMe: isNotEmpty(formErrors.rememberMeError),
  isToggleOn: isNotEmpty(formErrors.isToggleOnError),
  radioSelection: isNotEmpty(formErrors.radioSelectionError),
  dropdownTitle: isNotEmpty(formErrors.dropdownTitleError),
};

export function Forms() {
  const form = useUserForm({
    validateInputOnBlur: true,
    initialValues,
    validate: validationRules,
  });

  return (
    <Container maw={760} px={96} py={30} mih="100vh" bg="var(--mantine-color-white)">
      <UserFormProvider form={form}>
        <Flex direction="column" gap={32}>
          <UsernameInput />
          <PasswordInput />
          <InputTextLabel />
          <RememberCheckbox />
          <SwitchOnOff />
          <SelectionRadio />
          <DropdownTitle />
          <ButtonGroup />
        </Flex>
      </UserFormProvider>
    </Container>
  );
}
