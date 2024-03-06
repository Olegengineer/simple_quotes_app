import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #a4b0b6;
  padding-bottom: 15px;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusTitle = styled.span`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7e899c;
`;

export const ActionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.input`
  border-radius: 4px;
  padding: 8px;
  margin: 15px 0;
  color: #7e899c;
  font-size: 14px;
  border: 1px solid #a4b0b6;
  &::placeholder {
    color: #d5dae4;
  }
`;

export const Description = styled.textarea`
  border-radius: 4px;
  padding: 10px 8px;
  margin-bottom: 15px;
  color: #7e899c;
  font-size: 14px;
  border-color: #a4b0b6;
  &::placeholder {
    color: #d5dae4;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: #fff;
  background-color: red;
  padding: 4px;
  border-radius: 4px;
`;