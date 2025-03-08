import styled from "styled-components";

const Title = styled.h1`
  font-size: calc(1px + 2vw);
  margin: 1.5vh auto;
  padding: 1vh 1vw;
  color: whitesmoke;

  @media (max-width: 768px) {
    text-align: center;
    font-size: calc(1px + 2.5vw);
  }
`;

export default Title