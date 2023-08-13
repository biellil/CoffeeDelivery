/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { HeaderComponent } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderComponent>
      <NavLink to="/" title="Checkout">
        <img src={Logo} />
      </NavLink>
      <div>
        <button>
          <MapPin size={32} color="#282420" weight="fill" />
          <samp>Porto Alegre, RS</samp>
        </button>
        <NavLink to="/Checkout" title="Checkout">
          <ShoppingCart size={32} weight="fill" />
        </NavLink>
      </div>
    </HeaderComponent>
  )
}
