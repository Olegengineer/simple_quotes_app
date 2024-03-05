const quotes = (state = { quotes: [], activeFilter: 'all' }, action) => {
  const { type, id, title, description, active } = action;

  switch (type) {
    case 'ADD_QUOTE':
      return {
        ...state,
        quotes: [
          ...state.quotes,
          {
            id: id,
            title: title,
            description: description,
            active: active
          }
        ]
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        quotes: state.quotes.map(quote => {
          if (quote.id === id) {
            return {
              ...quote,
              active: !quote.active
            };
          }
          return quote;
        })
      };
    case 'APPLY_FILTER':
      return {
        ...state,
        activeFilter: action.activeFilter
      };
    default:
      return state;
  }
};

export default quotes;
