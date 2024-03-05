import { nanoid } from 'nanoid';

export const addQuote = (data: any) => ({
  type: 'ADD_QUOTE',
    ...data,
    id: nanoid()
});

export const changeStatus = (quoteId: string) => ({
  type: 'CHANGE_STATUS',
  id: quoteId
});

export const setFilter = (activeFilter: string) => ({
  type: 'APPLY_FILTER',
  activeFilter
});

export const setModal = (isOpen: boolean) => ({
  type: 'SET_MODAL',
  isOpen
});