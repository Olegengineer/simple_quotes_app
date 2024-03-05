import { setModal, setFilter } from "../../actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import QuoteCard from "../../components/QuoteCard";
import Button from "../../components/Button";
import useFilters from "../../hooks/use-filters";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionsContainer = styled.div`
  width: 32%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.div`
  padding: 10px;
  font-size: 26px;
  font-weight: 600;
  color: #737679;
`;

const SubLine = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #737679;
`;

const NotFound = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #83898e;
`;

const QuotesPage = () => {
  const dispatch = useDispatch();
  const handleCreate = () => dispatch(setModal(true));
  const { filteredQuotes, activeFilter, filteredCount } = useFilters();

  const applyFilters = (filter: string) => {
    dispatch(setFilter(filter));
  };

  return (
    <Container>
      <Headline>Welcome to the Quote Creator!</Headline>
      <SubLine>
        Start by clicking the button below to begin your journey of inspiration!
      </SubLine>
      <ActionsContainer>
        <Button create onClick={handleCreate}>
          Create Quote
        </Button>
        <div>
          <Button
            active={activeFilter === "all"}
            filterBar
            onClick={() => applyFilters("all")}
          >
            All {filteredCount.all}
          </Button>
          <Button
            active={activeFilter === "active"}
            filterBar
            onClick={() => applyFilters("active")}
          >
            Completed {filteredCount.active}
          </Button>
          <Button
            active={activeFilter === "noactive"}
            filterBar
            onClick={() => applyFilters("noactive")}
          >
            Draft {filteredCount.all - filteredCount.active || ""}
          </Button>
        </div>
      </ActionsContainer>

      {filteredQuotes?.length ? (
        filteredQuotes?.map((quote: any) => (
          <QuoteCard
            key={quote.id}
            id={quote.id}
            title={quote.title}
            description={quote.description}
            active={quote.active}
          />
        ))
      ) : (
        <NotFound>No quotes found...</NotFound>
      )}
    </Container>
  );
};

export default QuotesPage;
