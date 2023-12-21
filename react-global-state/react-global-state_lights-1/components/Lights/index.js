import styled from "styled-components";
import Light from "../Light";
import useBearStore from "@/store";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const lights = useBearStore((state) => state.lights);
  const handleToggle = useBearStore((state) => state.handleLightToggle);

  return (
    <StyledLights>
      
      {lights.map((light) => {
        return (
          <li key={light.id}>
            <Light
              name={light.name}
              onToggle={() => handleToggle(light.id)}
              isOn={light.isOn}
              id={light.id}
            ></Light>
          </li>
        );
      })}
    </StyledLights>
  );
}
