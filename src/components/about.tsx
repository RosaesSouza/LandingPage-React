import styles from './about.module.css';

export const About = () => {

  return (
    <section className={styles.container} id='about'>
        <div className={styles.about}>
            <img src="\src\assets\about.webp" alt="Foto de Paloma sorrindo"/>
            <div className={styles.text}>
                <h1>Sobre mim</h1>
                <p>Me chamo Paloma, sou formada em Pedagogia e Pós-graduada em Neuropsicopedagogia.<br/>
                Atuo com crianças há mais de 2 anos, desenvolvendo propostas que respeitam o ritmo, a individualidade e a infância real.<br/>
                Acredito no brincar como ferramenta essencial para o desenvolvimento emocional, motor e criativo.</p>
            </div>
        </div>
    </section>
  );
};