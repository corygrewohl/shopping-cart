import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  margin: 100px 25%;
  gap: 20px;

  .item {
    background-color: white;
    border: 1px rgb(188, 188, 188) solid;
    border-radius: 2%;
    min-height: 350px;
    min-width: 350px;

    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    text-align: center;

    a {
      color: black;
      text-decoration: underline;
    }
  }

  img {
    border-radius: 2%;

    width: 85%;
    height: 85%;
  }
`;
