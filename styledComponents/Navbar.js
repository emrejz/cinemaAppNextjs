import styled from "styled-components";
export const Navbar = styled.nav(
  props => `
  color: ${props.color ? props.color : "black"};
  font-size: 2.2rem;
  height:70px;
  background-color:black;
  color:white;
  margin: 0px;
  padding-left: 4vw;
  display:flex;
  flex-flow:row nowrap;
  justify-content: flex-start;
  border-bottom: 2px solid snow;
  align-items: center;
  a {
      margin-left:20px;
      cursor:pointer;
      padding:4px;
      border-radius:4px;
  }
  a:hover {
      background-color:white;
      color:black;
  }
`
);
