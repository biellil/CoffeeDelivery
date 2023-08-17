import styled from 'styled-components'

export const Main = styled.main`
  height: 1800px;
`

export const HomeContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10rem 32px 10rem;

  img {
    flex-shrink: 0;
    margin-left: 3.5rem;
  }
`
export const Content = styled.div`
  flex-shrink: 0;

  h1 {
    color: var(--base-title, #272221);
    font-family: 'Baloo2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  h2 {
    margin-top: 1rem;
    color: var(--base-subtitle, #403937);
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  div {
    margin-top: 4.6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    section {
      display: flex;
      align-items: center;

      svg {
        width: 32px;
        height: 32px;
        padding: 6px;
        border-radius: 1000px;
        color: var(--white);
      }

      samp {
        margin-left: 0.7rem;

        color: var(--base-text, #574f4d);

        font-family: 'Roboto';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
`
export const ShoppingCarts = styled.section`
  svg {
    background: var(--brand-yellow-dark, #c47f17);
  }
`
export const Packages = styled.section`
  svg {
    background: var(--base-text, #574f4d);
  }
`

export const Times = styled.section`
  svg {
    background: var(--brand-yellow, #dbac2c);
  }
`

export const Coffees = styled.section`
  svg {
    background: var(--brand-purple, #8047f8);
  }
`
