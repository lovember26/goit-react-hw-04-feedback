import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px;

  background-color: #929ae0;
  border: 1px solid #7a80b7;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: #723fb5;
  }
`;
