import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuote, setModal } from "../../actions";
import { useSelector } from "react-redux";
import useError from "../../hooks/use-error";
import {FormData, UseCreateQuote} from '../../types';

const initialForm: FormData = { title: "", description: "", active: false };

const useCreateQuote = (): UseCreateQuote => {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector((state: any) => state.modalReducer.isOpen);
  const { setErrorMessage, errorMessage, isActive }: any = useError();
  const [formData, setFormData] = useState<FormData>(initialForm);

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

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement> 
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    isOpen,
    errorMessage,
    isActive,
    formData,
    closeModal,
    saveQuote,
    handleChangeValue,
  };
};

export default useCreateQuote;
