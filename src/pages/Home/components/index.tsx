import styles from './coffeList.module.scss'
import coffee01 from '../../../assets/cofee01.svg'
import coffee02 from '../../../assets/cofee02.svg'
import coffee03 from '../../../assets/cofee03.svg'
import coffee04 from '../../../assets/cofee04.svg'
import coffee05 from '../../../assets/cofee05.svg'
import coffee06 from '../../../assets/cofee06.svg'
import coffee07 from '../../../assets/cofee07.svg'
import coffee08 from '../../../assets/cofee08.svg'
import coffee09 from '../../../assets/cofee09.svg'
import coffee10 from '../../../assets/cofee10.svg'
import coffee11 from '../../../assets/cofee11.svg'
import coffee12 from '../../../assets/cofee12.svg'
import coffee13 from '../../../assets/cofee13.svg'
import coffee14 from '../../../assets/cofee14.svg'

import { ShoppingCart } from '@phosphor-icons/react'
export function Products() {
  return (
    <header className={styles.header}>
      <h1>Nossos cafés</h1>
      <div className={styles.contemner}>
        <div className={styles.Cards}>
          <img src={coffee01} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
          </div>
          <samp>Expresso Tradicional</samp>
          <samp>O tradicional café feito com água quente e grãos moídos</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
        <div className={styles.Cards}>
          <img src={coffee02} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
          </div>
          <samp>Expresso Americano</samp>
          <samp>Expresso diluído, menos intenso que o tradicional</samp>

          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" step={1} min={1} max={60} />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
        <div className={styles.Cards}>
          <img src={coffee03} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
          </div>
          <samp>Expresso Cremoso</samp>
          <samp>Café expresso tradicional com espuma cremosa</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee04} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>gelado</h2>
          </div>
          <samp>Expresso Cremoso</samp>
          <samp>Bebida preparada com café expresso e cubos de gelo</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee05} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>com leite</h2>
          </div>
          <samp>Café com Leite</samp>
          <samp>Meio a meio de expresso tradicional com leite vaporizado</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee06} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>com leite</h2>
          </div>
          <samp>Latte</samp>
          <samp>
            Uma dose de café expresso com o dobro de leite e espuma cremosa
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee07} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>com leite</h2>
          </div>
          <samp>Capuccino</samp>
          <samp>
            Bebida com canela feita de doses iguais de café, leite e espuma
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee08} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>com leite</h2>
          </div>
          <samp>Macchiato</samp>
          <samp>
            Café expresso misturado com um pouco de leite quente e espuma
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee09} alt="" />
          <div className={styles.tpy}>
            <h2>Tradicional</h2>
            <h2>com leite</h2>
          </div>
          <samp>Mocaccino</samp>
          <samp>
            Café expresso misturado com um pouco de leite quente e espuma
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee10} alt="" />
          <div className={styles.tpy}>
            <h2>especial</h2>
            <h2>com leite</h2>
          </div>
          <samp>Chocolate Quente</samp>
          <samp>
            Bebida feita com chocolate dissolvido no leite quente e café
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee11} alt="" />
          <div className={styles.tpy}>
            <h2>especial</h2>
            <h2>alcoólico</h2>
            <h2>gelado</h2>
          </div>
          <samp>Cubano</samp>
          <samp>
            Drink gelado de café expresso com rum, creme de leite e hortelã
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee12} alt="" />
          <div className={styles.tpy}>
            <h2>especial</h2>
          </div>
          <samp>Havaiano</samp>
          <samp>Bebida adocicada preparada com café e leite de coco</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee13} alt="" />
          <div className={styles.tpy}>
            <h2>especial</h2>
          </div>
          <samp>Árabe</samp>
          <samp>Bebida preparada com grãos de café árabe e especiarias</samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>

        <div className={styles.Cards}>
          <img src={coffee14} alt="" />
          <div className={styles.tpy}>
            <h2>especial</h2>
            <h2>alcoólico</h2>
          </div>
          <samp>Irlandês</samp>
          <samp>
            Bebida a base de café, uísque irlandês, açúcar e chantilly
          </samp>
          <div>
            <p>
              R$ <strong>9,90</strong>
            </p>
            <input type="number" />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
