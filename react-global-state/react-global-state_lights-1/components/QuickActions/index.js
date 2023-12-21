import styled from "styled-components";
import Button from "../Button";
import useBearStore from "@/store";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const handleAllOn = useBearStore((state) => state.handleAllOn);
  const handleAllOff = useBearStore((state) => state.handleAllOff);

  const countOfOnLights = useBearStore(
    (state) => state.lights.filter((light) => light.isOn === true).length
  );

  return (
    <StyledQuickActions>
      <Button
        disabled={countOfOnLights === 0}
        type="button"
        onClick={() => {
          handleAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={countOfOnLights === 8}
        type="button"
        onClick={() => {
          handleAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
