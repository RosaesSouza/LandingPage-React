import { useState } from 'react';
import { normalizePhoneNumber } from './utils/masks';
import { AutoTextArea } from './forms/autoTextArea';
import styles from './contacts.module.css';

export const Contacts = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'phone'){
            setForm({ ...form, phone: normalizePhoneNumber(value) });
        } else {
            setForm({ ...form, [name]: value })
        };
    };

    return (
        <section className={styles.container} id="contacts">
            <h1 className={styles.title}>Agende sua primeira Oficina</h1>

            <div className={styles.contactsbox}>

                <div className={styles.contacts}>
                    <div className={styles.infoItem}>
                        <strong>Telefone:</strong> (28) 99968-6374
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Email:</strong> <a href='mailto:paloma.rosaes@gmail.com' target='_blank'>paloma.rosaes@gmail.com</a>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Instagram:</strong> <a href='https://www.instagram.com/prof.palomarosaes/' target='_blank'>@prof.palomarosaes</a>
                    </div>
                </div>

                <form className={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />

                    <AutoTextArea
                        name="message"
                        placeholder="Mensagem"
                        value={form.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                    />

                    <button type="submit" className={styles.button}>Enviar</button>
                </form>
            </div>
        </section>
    );
}