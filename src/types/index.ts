import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  filterBar?: boolean;
  active?: boolean;
  create?: boolean;
  onClick?: () => void;
}

export interface FormData {
  title: string;
  description: string;
  active: boolean;
}

export interface UseCreateQuote {
  isOpen: boolean;
  errorMessage: string;
  isActive: boolean;
  formData: FormData;
  closeModal: () => void;
  saveQuote: () => void;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface QuoteCardProps {
  id: string;
  title: string;
  description: string;
  active: boolean;
}