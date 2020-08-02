import styled from "styled-components";
export const InfoMessage = styled.h1(
  (props) => `
  color: ${props.error ? "red" : props.load ? "darkorange" : "black"};
  font-size: ${props.lg ? "50px" : props.md ? "40px" : "30px"};
  text-align: center;
  margin-top: 20%;
    
  `
);
