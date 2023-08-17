/* eslint-disable jsx-a11y/alt-text */
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Content,
  HomeContainer,
  ShoppingCarts,
  Packages,
  Times,
  Coffees,
  Main,
} from './styles.module'
import imagem from '../../assets/Imagem.svg'
import { Products } from './components'

export function Home() {
  return (
    <Main>
      <HomeContainer>
        <Content>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver <br /> a
            qualquer hora
          </h2>
          <div>
            <ShoppingCarts>
              <ShoppingCart size={16} weight="fill" />
              <samp>Compra simples e segura</samp>
            </ShoppingCarts>
            <Packages>
              <Package size={16} weight="fill" />
              <samp>Embalagem mantém o café intacto</samp>
            </Packages>
            <Times>
              <Timer size={16} weight="fill" />
              <samp>Entrega rápida e rastreada</samp>
            </Times>

            <Coffees>
              <Coffee size={16} weight="fill" />
              <samp>O café chega fresquinho até você</samp>
            </Coffees>
          </div>
        </Content>
        <img src={imagem} />
      </HomeContainer>
      <Products />
    </Main>
  )
}
