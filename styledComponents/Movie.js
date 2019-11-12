import styled from "styled-components";
export const Movie = styled.div(
  props => `
  background-image:url("${props.backdrop_path}");
  background-size:cover;
  margin: 0px
  width: 100%;
  filter: sepia(1);
  background-size: cover;
  height: fit-content;
  min-height: calc( 100vh - 70px );
  align-items: flex-start;
  display: flex;
  justify-content: center;
  .mainContext {
    width:80%;
    margin-top:40px;
    height:fit-content;
    background-color:rgba(255,255,255,0.6);
    font-size:24px;
    padding:20px;
    margin-bottom:40px;

  }
}
`
);
