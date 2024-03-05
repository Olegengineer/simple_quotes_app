import styled, { css, keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { changeStatus } from "../actions";

const flash = keyframes`
  0% {
    background-color: lightgreen;
  }
  100% {
    background-color: transparent;
  }
`;

const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 310px;
  margin-right: 50px;
  background-color: #fefdfd;
  border-radius: 5px;
  max-width: 100%;
  margin: 10px 0;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
  padding: 12px;
`;

const DotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 40px;
`;

const UserCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #231e1e;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Description = styled.span`
  max-width: 150px;
  margin-top: 2px;
  color: #8b8f98;
  font-size: 12px;
`;

const StatusDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "green" : "gray")};
  margin-left: 5px;
  animation: ${(props) =>
    props.active &&
    css`
      ${flash} 0.5s ease
    `};

  &:hover::after {
    content: "Status";
    position: absolute;
    margin-top: -15px;
    transform: translateX(-50%);
    background-color: ${(props) => (props.active ? "green" : "gray")};
    color: #fff;
    padding: 2px;
    border-radius: 4px;
    font-size: 10px;
    white-space: nowrap;
    pointer-events: none;
  }
`;

interface Props {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

function QuoteCard({ id, title, description, active }: Props) {
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
}

export default QuoteCard;
