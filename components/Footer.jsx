import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" layout="fill" objectFill="contain" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED A SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        65, BP block
                        <br /> Pitampura, Delhi
                        <br /> 7053427752
                    </p>
                    <p className={styles.text}>
                        65, BP block
                        <br /> Pitampura, Delhi
                        <br /> 7053427752
                    </p>
                    <p className={styles.text}>
                        65, BP block
                        <br /> Pitampura, Delhi
                        <br /> 7053427752
                    </p>
                    <p className={styles.text}>
                        65, BP block
                        <br /> Pitampura, Delhi
                        <br /> 7053427752
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        Saturday - Sunday
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        Saturday - Sunday
                        <br /> 9:00 - 22:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
