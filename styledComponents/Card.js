import styled from "styled-components";
export const Card = styled.div(
  (props) => `
  width:200px;
  height:300px;
  background-color:white;
  color: ${props.color ? props.color : "black"};
  font-size: 2rem;
  text-align: center;
  position:relative;
  cursor:pointer;
  margin: 20px;
  background-size: cover;
  .header {
      padding:6px;
      box-sizing:border-box;
      padding-top:12px;
      height:fit-content;
      max-height:52px;
      min-height:52px;
      width:100%;
      position:absolute;
      top:0;
      left:0;
      background-color:rgba(0,0,0,.8);
      color:white;
      overflow: hidden;
      transition: 1s ease;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      transform: rotateZ(${(Math.random() * 2 - 1) * (Math.random() * 8)}deg);
  }
    .header:hover{
        max-height:300px;
    }  
    img{
        width:100%;
        height:100%;
    }
`
);
