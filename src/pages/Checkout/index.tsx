import { Card, Main, Content, ContentCoffee, CardSection, H1 } from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
  MapPinLine,
} from '@phosphor-icons/react'

export function Checkout() {
  return (
    <>
      <H1>
        <h1>Complete seu pedido</h1>
        <h1>Cafés selecionados</h1>
      </H1>

      <Main>
        <Card>
          <CardSection>
            <div>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <samp>Endereço de Entrega</samp>
                <samp>Informe o endereço onde deseja receber seu pedido</samp>
              </div>
            </div>
            <Content>
              <li>
                <input placeholder="Numero" type="text" />
                <input placeholder="Complemento" type="text" />
                <input placeholder="Bairro" type="text" />
                <input placeholder="Cidade" type="text" />
                <input placeholder="UF" type="text" />
              </li>
            </Content>
          </CardSection>

          <CardSection>
            <div>
              <CurrencyDollar size={22} color="#4B2995" />
              <div>
                <samp>Endereço de Entrega</samp>
                <samp>Informe o endereço onde deseja receber seu pedido</samp>
              </div>
            </div>
            <Content>
              <div>
                <button>
                  <CreditCard size={22} color="#4B2995" /> Cartão de crédito
                </button>
                <button>
                  <Bank size={22} color="#4B2995" />
                  cartão de débito
                </button>
                <button>
                  <Money size={22} color="#4B2995" /> dinheiro
                </button>
              </div>
            </Content>
          </CardSection>
        </Card>
        <Card>
          <ContentCoffee>
            <header></header>
          </ContentCoffee>
        </Card>
      </Main>
    </>
  )
}
