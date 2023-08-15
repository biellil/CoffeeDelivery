import { styled } from 'styled-components'

export const Main = styled.main`
  padding: 2.5rem 10rem 0px 10rem;
  h1 {
    color: var(--base-subtitle, #403937);

    /* Title/Title XS */
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.4625rem */
  }
`
export const Section = styled.section`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  div {
    
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    display: grid;
    grid-template-columns: auto 1rem;

    svg {
      color: var(--yellow-dark, #c47f17);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    max-width: 550px;

    input {
      border-radius: 0.25rem;
      border: 1px solid var(--base-button, #e6e5e5);
      background: var(--base-input, #ededed);
      border: 0;
      padding: 0.75rem;
      gap: 0.25rem;

      flex: 1 0 0;
      color: var(--base-label, #8d8686);
      /* Text/Regular S */
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 1.1375rem */
    }

    div {
      flex-wrap: wrap;
    }
  }
`

export const InputCEP = styled.input`
  width: 280px;
`

export const InputRua = styled.input`
  width: 550px;
  flex: 1;
`
export const InputNumero = styled.input`
  width: 200px;
`

export const InputUF = styled.input`
  width: 60px;
`
export const InputCidade = styled.input`
  flex: 1 0 0;
  width: 252px;
`

export const InputComplemento = styled.input``

export const Section2 = styled.section`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 0.375rem;
  background: var(--base-card, #f3f2f2);
`
