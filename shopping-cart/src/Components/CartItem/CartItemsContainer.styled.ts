import styled from "styled-components";

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 25%;
  gap: 5px;

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 2fr;

    background-color: white;
    border: 1px rgb(188, 188, 188) solid;
    border-radius: 2%;
    min-height: 100px;
    min-width: 600px;
    padding: 0px 30px;

    .cart-item-info {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;

        h2 {
            font-size: 32px;
        }

        p {
            font-size: 24px;
        }

        Button {
          background-color: red;
          color: white;
        }

        Button:hover {
          background-color: #cf1616;
        }
    }
  }

  .total {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      h2 {
        font-size: 32px;
      }

      p {
        font-size: 24px;
        color: red;
      }
    }

    Button {
        background-color: green;
        max-width: 120px;
        align-self: flex-end;
    }

    Button:hover {
        background-color: #01a401;
    }

`
