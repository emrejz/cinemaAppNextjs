import styled from "styled-components";
export const Header = styled.h1(
  props => `
  color: ${props.color ? props.color : "black"};
  font-size: ${props.lg ? "50px" : props.md ? "40px" : "30px"};
  text-align: center;
  margin: 0px
`
);
