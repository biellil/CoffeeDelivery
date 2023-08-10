import imagem from './assets/Imagem.svg';
import styles from './App.module.scss';
import {  Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { CoffeList } from './components/coffeList';


export function App() {


  return (
    <main className={styles.main} >
     <div className={styles.content}>
      <h1>Encontre o café perfeito <br />para qualquer hora do dia</h1>
      <h2>Com o Coffee Delivery você recebe seu café onde estiver <br /> a qualquer hora</h2>
       <div>
       <section className={styles.ShoppingCart }> 
           <ShoppingCart size={16}  weight="fill" /> 
           <samp>Compra simples e segura</samp>

          </section> 
          <section className={styles.Package}>
          <Package size={16}  weight="fill" />
         <samp>Embalagem mantém o café intacto</samp>

          </section>
         <section className={styles.Timer}> 

         <Timer size={16}  weight="fill" />
          <samp>Entrega rápida e rastreada</samp>

           </section> 

           <section className={styles.Coffee}>
           <Coffee size={16}  weight="fill" />
            <samp>O café chega fresquinho até você</samp>
           </section>
       </div>
          
     </div>
     <img src={imagem}/>

    </main>
  )
}

export default App
