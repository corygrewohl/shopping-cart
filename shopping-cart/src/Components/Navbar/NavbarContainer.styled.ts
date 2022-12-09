import styled from "styled-components";

const rowFlex = () => {
  return 'display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 2em; '
}

export const NavbarContainer = styled.div`
  ${rowFlex};
  
  background-color: black;
  padding: 15px;
  padding-inline: 100px;

  font-size: 24px;
  color: white;

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }
`;

export const LinksContainer = styled.div`
  ${rowFlex}
`;