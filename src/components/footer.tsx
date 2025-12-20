import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2024 Paloma Rosaes. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://rosaes.com.br/">/Rosaes</a></p>
        </footer>
    );
}