import { useSelector } from 'react-redux';

const useFilters = () => {
  const { quotes, activeFilter } = useSelector(state => state.quotesReducer);

  let filteredQuotes;

  if (activeFilter === 'all') {
    filteredQuotes = quotes;
  } else if (activeFilter === 'active') {
    filteredQuotes = quotes.filter(quote => quote.active);
  } else if (activeFilter === 'noactive') {
    filteredQuotes = quotes.filter(quote => !quote.active);
  }

  const filteredCount = {
    all: quotes?.length > 0 && quotes?.length,
    active: quotes?.length > 0 &&  quotes.filter(quote => quote.active)?.length
  }

  return {filteredQuotes, activeFilter, filteredCount};
};

export default useFilters;
