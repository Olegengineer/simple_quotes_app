import { useDispatch } from "react-redux";
import { changeStatus } from "../../actions";
import { QuoteCardProps } from "../../types";
import {
  UserCardContainer,
  DotContainer,
  Thumbnail,
  UserCardInfo,
  Title,
  DataContainer,
  Description,
  StatusDot,
} from "./style";

const QuoteCard = ({ id, title, description, active }: QuoteCardProps) => {
  const dispatch = useDispatch();
  const handleStatus = () => dispatch(changeStatus(id));

  return (
    <UserCardContainer>
      <DotContainer>
        <StatusDot active={active} />
      </DotContainer>
      <DataContainer>
        <Thumbnail src="/quote.svg" alt="icon" />
        <UserCardInfo>
          <Title onClick={handleStatus}>{title}</Title>
          <Description>{description}</Description>
        </UserCardInfo>
      </DataContainer>
    </UserCardContainer>
  );
};

export default QuoteCard;
