const modal = (state = { isOpen: false }, action: { type: any; isOpen: boolean; }) => { 
  const { type, isOpen } = action;  
  
  switch (type) {
    case 'SET_MODAL':
      return {
        ...state,
        isOpen: isOpen
      };          
    default:
      return state;
  }
};

export default modal;