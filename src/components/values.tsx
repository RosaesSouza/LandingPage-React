import styles from './values.module.css';

export const Values = () => {

    return (
        <section className={styles.container} id="values">
            <h1>Valores</h1>
            <div className={styles.cards}>
                <div className={styles.cardValue}>
                    <p className={styles.cardValueTitle}>Oficina Experimental</p>
                    <h1>R$60,00</h1>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                </div>
                <div className={styles.cardValue}>
                    <p className={styles.cardValueTitle}>Plano Mensal</p>
                    <h1>R$230,00</h1>
                    <p className={styles.cardValueDescription}>• 2 oficinas por semana</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                </div>
                <div className={styles.cardValue}>
                    <p className={styles.cardValueTitle}>Oficina Avulsa</p>
                    <h1>R$90,00</h1>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                    <p className={styles.cardValueDescription}>• bla bla bla</p>
                </div>
            </div>
        </section>
    );
}