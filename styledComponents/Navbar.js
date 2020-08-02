import styled from "styled-components";
export const Navbar = styled.nav(
  (props) => `
  color: ${props.color ? props.color : "white"};
  font-size: 2.2rem;
  height:76px;
  background-color:black;
  margin: 0px;
  padding-left: 36px;
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
      color:white;
      text-decoration: none;
  }
  a.active{
      color:gold;
      text-decoration: underline;
  }
  a:hover {
      background-color:white;
      color:black;
  }
`
);
