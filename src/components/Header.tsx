
import styles from './Header.module.scss';
import Logo from '../assets/Logo.svg';
import { ShoppingCart ,MapPin }from "@phosphor-icons/react";

export function Header() {


    return (
        <nav className={styles.nav}>
          
          <img src={Logo}/>
        <div>

         
          <button> <MapPin size={32} color="#282420" weight="fill" /><samp>Porto Alegre, RS</samp></button>
        <button><ShoppingCart size={32}  weight="fill" /></button>
        </div>
        </nav>
      );

}