import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ allOn, allOff, countOfOnLights }) {

  return (
    <StyledQuickActions>
      <Button
        disabled={countOfOnLights === 0}
        type="button"
        onClick={() => {
          allOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={countOfOnLights === 8}
        type="button"
        onClick={() => {
          allOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
