import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: serif;
  }
`
export const container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 32px;
`;

export const issuer_title = styled.h1`
  color: #00bab8;
  font-size: 2.0em;
  margin-bottom: 32px;
`;

export const issuer_info = styled.div`
  color: #d0d0d0;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const comment_body = styled.div`
  margin-bottom: 32px;
  margin-left: 64px;
`;

export const form = styled.form`
  display: flex;
  align-items: center;

  > * {
    margin-right: 10px;
  }
`;

export const input = styled.input`
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
