import styled from 'styled-components'

export const AuthFormWrapper = styled.div.attrs({
  className: 'AuthFormWrapper',
})`
  font-size: 20px;
  `;
export const AuthFormContent = styled.div.attrs({
  className: 'AuthFormContent',
  })`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 50px 0 30px;
    }
  `;

export const AuthLabel = styled.label.attrs({
  className: 'AuthLabel',
  })`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
  `;
export const AuthInput = styled.input.attrs({
  className: 'AuthInput',
  })<{ $error?: boolean }>`
    border: 1px solid black;
    border-color: ${props => props.$error ? 'red' : 'black'};
    height: 30px;
    border-radius: 5px;
    font-size: inherit;
    padding: 5px 10px;
    &::placeholder {
      font-size: inherit;
    }
  `;

export const AuthSpan = styled.span.attrs({
  className: 'AuthSpan',
  })`
  `;

export const AuthSpanErrors = styled.span.attrs({
  className: 'AuthSpanErrors',
  })`
    position: absolute;
    left: 100%;
    width: max-content;
    margin-left: 10px;
    color: red;
  `;

export const ButtonSubmit = styled.input.attrs({
  className: 'ButtonSubmit',
  })`
    height: 40px;
    font-size: inherit;
    cursor: pointer;
    padding: 10px 50px;
    width: auto;
    border-radius: 10px;
    margin: 0 auto;
    background-color: rgba(29, 159, 239, 1);
    &:hover {
      background-color: rgba(29, 129, 239, 1);
    }
  `;

  export const ResultFromResponse = styled.h4<{$colorText?: string}>`
    color: ${props => props.$colorText || 'black'};
  `;
  