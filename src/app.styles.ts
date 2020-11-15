import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #008483;
  }
  body {
    font-size: 16px;
    font-family: serif;
    -webkit-font-smoothing: antialiased;
  }
`
export const container = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 32px;
`;

export const issue_container = styled.div`
  margin-bottom: 5em;
`;

export const issuer_title = styled.h1`
  color: var(--primary-color);
  font-size: 2.0em;
  margin-bottom: 10px;
`;

export const issuer_info = styled.div`
  color: #a0a0a0;
  font-size: 1.0em;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;

  > strong {
    color: #636161;
  }
`;

export const issuer_body = styled.div`
  color: #2b2b2b;
  font-size: 1.0em;
  line-height: 1.6em;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
`;

export const comments_header = styled.h3`
  color: var(--primary-color);
`;

export const comment_body = styled.div`  
  background: #f3f4f7;
  margin-bottom: 10px;
  padding: 1.7em;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  line-height: 1.6em;
  box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,0.05);

  img {
    width: 100%;
  }
`;

export const form = styled.form`
  display: flex;
  align-items: center;

  input{
    flex: 1 1 auto;
  }

  div {
    flex: 0 0 15px;
    text-align: center;
  }

  button {
    margin-left: 20px;
    flex: 0 0 200px;

    @media (max-width: 1023px) {
      flex-basis: auto;
    }
  }

`;

export const input = styled.input`
  font-size: 1.2em;
  width: 100%;
  padding: 0.8em 1.0em;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  box-shadow: 3px 17px 39px -12px rgba(208,208,208,0.9);

  &:active,&:focus {
    outline: none;
    border-color: #00bab8;
    box-shadow: 3px 17px 39px -12px rgba(0,186,184,0.9);
  }
`;

export const button = styled.button`
  font-size: 1.2em;
  color: white;
  background: #00bab8;
  text-align: center;
  padding: 0.8em 1.0em;
  border: 1px solid #00bab8;
  border-radius: 10px;
  box-shadow: 3px 17px 39px -12px rgba(0,186,184,0.9);
`;

export const loader = styled.div`
  padding: 1.5em 0;
`;

export const results_wrapper = styled.div`
  padding: 1.5em 0;
`;
