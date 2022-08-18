import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.green[50]}
}

button {
  cursor: pointer;
}
`;
