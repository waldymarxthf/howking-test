import { createFormContext } from "@mantine/form";

interface UserFormValues {
  username: string;
  password: string;
  textLabel: string;
  rememberMe: boolean;
  isToggleOn: boolean;
  radioSelection: string;
  dropdownTitle: string;
}

export const [UserFormProvider, useUserFormContext, useUserForm] =
  createFormContext<UserFormValues>();
