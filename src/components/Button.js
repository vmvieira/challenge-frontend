import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  color: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  border: 1px solid
    ${(p) => (p.secondary ? p.theme.primaryColor : p.theme.secondaryColor)};
  font-weight: bold;
  text-decoration: none;
  border-radius: 24px;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease;
  margin: 10px 0;

  &:hover {
    opacity: 0.7;
  }
`;

export { Button };
