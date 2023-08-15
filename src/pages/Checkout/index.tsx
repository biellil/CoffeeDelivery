import MapPinLine from '@phosphor-icons/react/dist/icons/MapPinLine'
import {
  Main,
  Section,
  InputUF,
  InputCidade,
  InputRua,
  InputComplemento,
  InputCEP,
  InputNumero,
  Section2,
} from './styles'

export function Checkout() {
  return (
    <Main>
      <h1>Complete seu pedido</h1>
      <Section>
        <div>
          <MapPinLine size={22} />
          <samp>Endereço de Entrega</samp>
          <samp>Informe o endereço onde deseja receber seu pedido</samp>
        </div>
        <form>
          <InputCEP placeholder="CEP" type="text" />
          <InputRua placeholder="Rua" type="text" />
          <div>
            <InputNumero placeholder="Numero" type="text" />
            <InputComplemento placeholder="Complemento" type="text" />
            <input placeholder="Bairro" type="text" />
            <InputCidade placeholder="Cidade" type="text" />
            <InputUF placeholder="UF" type="text" />
          </div>
        </form>
      </Section>
      <Section2> </Section2>
    </Main>
  )
}
