import styled from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #6480e3;
  text-shadow: 1px 6px 6px #000000;
  @media screen and (max-width: 374px) {
    font-size: 30px;
  }
  @media screen and (max-width: 414px) {
    font-size: 34px;
  }
  @media screen and (min-width: 415px) and (max-width: 800px) {
    font-size: 45px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }
`;

const Bannier = styled.div`
  background-image: ${(props) => `url(${props.logo})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;
  filter: drop-shadow(0px 5px 0px #6480e3);
`;

const Header = styled.header`
  display: grid;
  height: 340px;
  @media (max-width: 700px) {
    height: 230px;
  }
`;

const Application = styled.div`
  margin: auto;
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const EthSvg = styled.img`
  position: absolute;
  right: 1rem;
  width: 20rem;
  top: 69rem;
  @media (max-width: 700px) {
    top: 62rem;
    width: 12rem;
  }
  @media screen and (min-width: 701px) and (max-width: 789px) {
    top: 72rem;
    width: 10rem;
  }
  @media screen and (min-width: 790px) and (max-width: 1040px) {
    width: 14rem;
  }
`;

export { Title, Bannier, Header, Application, EthSvg };
