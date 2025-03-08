import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 20%;
  align-content: flex-start;
  background-color: #222;
  padding: 0vh 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    height: 10vh;
  }
`;

const StyledUl = styled.ul`
  font-size: calc(1px + 1.5vw);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 1vw;
  gap: 2.5vh;

  @media (max-width: 768px) {
  display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1vh 1vw;
    max-height: 4vh;
  }
`;

const StyledLi = styled.li`
  width: 90%;
  margin: 1vh 0;
  padding: 2vh 0vw 2vh 0vw;
  background-color: #333;
  text-align: center;
  align-self: center;

  @media (max-width: 768px) {
    width: auto;
    margin: 0;
    padding: 1vh 1vw;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
`;

export default function Nav() {
  return (
    <>
    <StyledNav>   
      <StyledUl>
          <StyledLi>
            <StyledLink to={"/"}>Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/about"}>About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/education"}>Education</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/certifications"}>Certifications</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/work-experiences"}>Experience</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/projects"}>Projects</StyledLink>
          </StyledLi>
        </StyledUl>

    </StyledNav>
    </>
  );
}