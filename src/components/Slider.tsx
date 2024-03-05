import { useState } from "react";
import styled from "styled-components";

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 18px;
`;

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SliderContainer = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#099d09de" : "#ccc")};
  transition: background-color 0.4s;
  border-radius: 34px;
`;

const SliderElement = styled.span`
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: transform 0.4s;
  border-radius: 50%;
  transform: ${(props) =>
    props.checked ? "translateX(18px)" : "translateX(0)"};
`;

const Slider = ({ inputProps, onChange }: any) => {
  const [checked, setChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <SwitchLabel className="switch">
      <HiddenInput
        {...inputProps}
        type="checkbox"
        onChange={handleInputChange}
        checked={checked}
      />
      <SliderContainer className="slider" checked={checked} round={checked}>
        <SliderElement
          className="slider-element"
          checked={checked}
          round={checked}
        />
      </SliderContainer>
    </SwitchLabel>
  );
};

export default Slider;
