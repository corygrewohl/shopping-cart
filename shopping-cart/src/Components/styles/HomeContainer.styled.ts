import styled from "styled-components";

export const HomeContainer = styled.div`
  main {
    display: flex;
    justify-content: space-around;
    padding-top: 60px;
  }

  .about {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;

    margin: 40px;
    margin-top: 60px;
    padding: 20px;
    width: 25%;
    min-height: 50vh;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 24px;
    }
  }

  .welcome-image {
    text-align: center;
    img {
      max-height: 60vh;
    }
  }
`;
