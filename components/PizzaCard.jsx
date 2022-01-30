import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title} style={{zIndex:1}}>Veggie Italiano</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Veggie Italiano is the god of all pizzas. It has
                tomatoes, onions, cucumber, ginger, and yogurt. Try it today!
            </p>

        </div>
    )
}

export default PizzaCard
