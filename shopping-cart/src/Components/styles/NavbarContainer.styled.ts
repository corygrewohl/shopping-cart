import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2em;

  background-color: black;
  padding: 15px;
  padding-right: 100px;

  font-size: 24px;

  a {
    text-decoration: none;
    color: white;
  }

  li {
    list-style: none;
  }
`;
