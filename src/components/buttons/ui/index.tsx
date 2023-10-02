import { Group } from "@mantine/core";
import { CancelButton } from "./cancel-btn";
import { NextButton } from "./next-btn";

export function ButtonGroup() {
  return (
    <Group justify="space-between">
      <CancelButton />
      <NextButton />
    </Group>
  );
}
