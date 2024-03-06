import React from "react";
import Slider from "../Slider";
import Button from "../Button";
import {
  ModalOverlay,
  ModalContainer,
  InputsContainer,
  SliderContainer,
  StatusTitle,
  ActionsContainer,
  Title,
  Description,
  Error,
} from "./style";
import useCreateQuote from "./use-create-quote";

const CreateQuote: React.FC = () => {
  const {
    isOpen,
    isActive,
    errorMessage,
    formData,
    closeModal,
    saveQuote,
    handleChangeValue,
  } = useCreateQuote();

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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(event)
                }
              />
              <Description
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleChangeValue(event)
                }
              />
              <SliderContainer>
                <StatusTitle>Status:</StatusTitle>
                <Slider
                  onChange={(isChecked: boolean) =>
                    handleChangeValue({
                      name: "active",
                      value: isChecked,
                    } as unknown as React.ChangeEvent<HTMLInputElement>)
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
