import { useState } from "react";
import styled from "styled-components";
import { addQuote, setModal } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Slider from "./Slider";
import Button from "./Button";
import useError from "../hooks/use-error";

const ModalOverlay = styled.div`
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

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #a4b0b6;
  padding-bottom: 15px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StatusTitle = styled.span`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #7e899c;
`;

const ActionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.input`
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

const Description = styled.textarea`
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

const Error = styled.div`
  font-size: 12px;
  color: #fff;
  background-color: red;
  padding: 4px;
  border-radius: 4px;
`;

const initialForm = { title: "", description: "", active: false };

const CreateQuote = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalReducer.isOpen);
  const { setErrorMessage, errorMessage, isActive } = useError();
  const [formData, setFormData] = useState(initialForm);

  const closeModal = () => dispatch(setModal(false));

  const saveQuote = async () => {
    try {
      if (formData.title.length < 8) {
        setErrorMessage("Title must be at least 8 characters long.");
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(addQuote(formData));
      setFormData(initialForm);
      closeModal();
    } catch (err) {
      console.log("error");
    }
  };

  const handleChangeValue = ({ name, value }: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContainer>
            {isActive && <Error>{errorMessage}</Error>}
            <InputsContainer>
              <Title
                required
                type="text"
                name="title"
                placeholder="Quote name"
                value={formData.title}
                onChange={(e) => handleChangeValue(e.target)}
              />
              <Description
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={(e) => handleChangeValue(e.target)}
              />
              <SliderContainer>
                <StatusTitle>Status:</StatusTitle>
                <Slider
                  onChange={(isChecked: boolean) =>
                    handleChangeValue({ name: "active", value: isChecked })
                  }
                />
              </SliderContainer>
            </InputsContainer>
            <ActionsContainer>
              <Button primary onClick={saveQuote}>
                Save
              </Button>
              <Button secondary onClick={closeModal}>
                Cancel
              </Button>
            </ActionsContainer>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default CreateQuote;
