import styles from './coffeList.module.scss'
import coffee01 from '../../../assets/cofee01.svg'
import coffee02 from '../../../assets/cofee02.svg'
import { ShoppingCart } from '@phosphor-icons/react'
export function Products() {
  return (
    <header className={styles.Product}>
      <h1>Nossos cafés</h1>
      <div>
        <div className={styles.Cards} >
          <img src={coffee01} alt="" />
          <h2>Tradicional</h2>
          <samp>Expresso Tradicional</samp>
          <samp>O tradicional café feito com água quente e grãos moídos</samp>
          <button>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </div>
        <div className={styles.Cards} >
          <img src={coffee02} alt="" />
          <h2>Tradicional</h2>
          <samp>Expresso Tradicional</samp>
          <samp>O tradicional café feito com água quente e grãos moídos</samp>
          <button>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </div>
      </div>
    </header>
  )
}
