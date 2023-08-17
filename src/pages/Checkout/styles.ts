import { styled } from 'styled-components'

export const H1 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 45px 0px 0px 0px;
  h1 {
    color: var(--base-subtitle, #403937);

    /* Title/Title XS */
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }
`
export const Main = styled.main`
  height: 1000px;
  padding: 15px 0px 0px 160px;
  display: flex;
`
export const Card = styled.section`
  width: 150rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: flex-start;

  align-self: stretch;
  h1 {
    display: flex;

    color: var(--base-subtitle, #403937);

    /* Title/Title XS */
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }
`
export const CardSection = styled.section`
  display: flex;

  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 0.375rem;
  background: var(--base-card, #f3f2f2);
  + section {
    margin-top: 14px;
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    div {
      display: flex;
      flex-direction: column;

      samp {
        align-self: stretch;
        color: var(--base-subtitle, #403937);

        /* Text/Regular M */
        font-family: 'Roboto';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */

        + {
          color: var(--base-text, #574f4d);
          height: 21px;
          /* Text/Regular S */
          font-family: 'Roboto';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
        }
      }
    }
  }
`

export const Content = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  > li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    input {
      display: flex;
      width: 200px;
      padding: 12px;
      align-items: center;
      gap: 4px;

      border: 0;
      border-radius: 4px;
      border: 1px solid var(--base-button, #e6e5e5);
      background: var(--base-input, #ededed);

      color: var(--base-label, #8d8686);

      /* Text/Regular S */
      font-family: ' Roboto';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
    }
  }

  button {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: 0;
    border-radius: 6px;
    background: var(--base-button, #e6e5e5);

    color: var(--base-text, #574f4d);

    /* Components/Button S */
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
  }
`
export const ContentCoffee = styled.section`
margin-left: 2rem;
  display: flex;
  width: 28rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
  background: var(--base-card, #f3f2f2);
`
