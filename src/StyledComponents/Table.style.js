import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  &:last-child {
    color: #777777ba;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const CurrenciesContainer = styled.div`
  border: 1px solid #b6b6b6;
  box-shadow: rgb(193, 204, 222) 7px 7px 18px 0px;
  border-radius: 5px;
  width: 90%;
  margin: 5rem auto;
`;

const CurrenciesList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 0.2fr 0.2fr;
  grid-gap: 2rem;
  align-items: center;
  border-top: 1px solid #b6b6b6;
  list-style: none;
  padding: 1.5rem 1rem;
  & img {
    height: 3rem;
  }
  & > p:last-of-type {
    color: grey;
  }
  @media (max-width: 700px) {
    grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 85px 1fr 0.5fr 0.5fr;
    font-size: 12px;
    padding: 1.5rem 0.5rem;
    & img {
      height: 2rem;
    }
  }
`;

const CurrenciesImg = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  margin-left: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 30px 1fr;
    margin-left: unset;
  }
`;

const ProgressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`;

const ListContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.2fr 0.2fr;
  align-items: center;
  padding: 1.5rem 0;
  grid-gap: 1rem;
  margin: 0px 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 0.5rem;
  }
`;

const Total = styled.div`
  text-align: center;
  padding: 2rem 0px;
  border-top: 1px solid #b6b6b6;
`;

export {
  Title,
  CurrenciesContainer,
  CurrenciesList,
  CurrenciesImg,
  ProgressContainer,
  ListContainerHeader,
  Total,
};
