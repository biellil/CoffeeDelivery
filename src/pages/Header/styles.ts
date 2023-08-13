import { styled } from 'styled-components'

export const HeaderComponent = styled.nav`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;

  background: var(--base-background, #fafafa);

  img {
    width: 84.952px;
    height: 40px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      border: none;
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      background: var(--brand-purple-light, #ebe5f9);
      samp {
        color: var(--brand-purple-dark, #4b2995);
        font-family: Roboto;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */
      }
    }
    a {
      cursor: pointer;
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      margin-left: 0.5rem;

      border-radius: 0.375rem;
      color: var(--yellow-dark);
      background: var(--brand-yellow-light, #f1e9c9);
    }
  }
`
