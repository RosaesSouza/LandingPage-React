import styles from './how.module.css';

export const How = () => {

  return (
    <section className={styles.container} id='how'>
        <div className={styles.howCard1}>
            <h1>Como funciona?</h1>
        </div>
        <div className={styles.howContainer}>
            <div className={styles.howCard2}>
                <h1 className={styles.howTitle}>Para quem?</h1>
                <p className={styles.howText}>
                    • Crianças de 3 a 12 anos <br/>
                    • Pais que desejam desenvolver a coordenação motora da criança <br/>
                    • Famílias que valorizam criatividade, imaginação e expressão artística <br/>
                    • Responsáveis que querem aumentar a autonomia e confiança da criança
                </p>
            </div>
            <div className={styles.howCard3}>
                <h1 className={styles.howTitle}>Metodos?</h1>
                <p className={styles.howText}>
                    • Oficinas criativas semanais<br/>
                    • Atividades artísticas sensoriais<br/>
                    • Experiências e jogos lúdicos<br/>
                    • Contação de historias<br/>
                    • e muito mais...
                </p>
            </div>
        </div>
    </section>
  );
};