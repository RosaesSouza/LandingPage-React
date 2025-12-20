import styles from './testimonials.module.css';

const TESTIMONIALS = [
    { id: 1, text: "\"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\""},
    { id: 2, text: "\"BBBBBBBBBBBBBBBBBBBBBBBB BBBBBBBBBBBBBBBBBBBBBBBBBBBB\""},
    { id: 3, text: "\"CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC CCCCCCCCCCCCCCCCCCCCCCCCCCCC\""},
];

export const Testimonials = () => {

    return ( 
        <section className={styles.container} id="testimonials">
            {TESTIMONIALS.map((item) => (
                <div key={item.id} className={styles.testimonialCard}>
                    <img className={styles.testimonialImage} src="/src/assets/icon.webp"/>
                    <p className={styles.testimonialText}>{item.text}</p>
                    <img className={styles.testimonialImage} src="/src/assets/icon.webp"/>
                </div>
            ))}
        </section>
    );
};