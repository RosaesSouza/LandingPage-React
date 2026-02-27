import { useState, FormEvent } from 'react';
import { normalizePhoneNumber } from './utils/masks';
import { AutoTextArea } from './forms/autoTextArea';
import { sendContactEmail } from './../service/emailService'; 
import styles from './contacts.module.css';

export const Contacts = () => {
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'phone'){
            setForm({ ...form, phone: normalizePhoneNumber(value) });
        } else {
            setForm({ ...form, [name]: value })
        };
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        setStatus('loading');

        try {
            await sendContactEmail({
                name: form.name,
                phone: form.phone,
                message: form.message
            });
            
            setStatus('success');
            setForm({ name: '', phone: '', message: '' });

            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error) {
            console.error("Erro no envio:", error);
            setStatus('error');
            
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }
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
                        <strong>Email:</strong> <a href='mailto:paloma.rosaes@gmail.com' target='_blank' rel="noreferrer">paloma.rosaes@gmail.com</a>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Instagram:</strong> <a href='https://www.instagram.com/prof.palomarosaes/' target='_blank' rel="noreferrer">@prof.palomarosaes</a>
                    </div>
                </div>

                {/* Adicionamos o onSubmit no form */}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        value={form.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                    />

                    <AutoTextArea
                        name="message"
                        placeholder="Mensagem"
                        value={form.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                        disabled={status === 'loading'}
                    />

                    {/* Feedback visual dinâmico */}
                    <button 
                        type="submit" 
                        className={styles.button}
                        disabled={status === 'loading' || status === 'success'}
                        style={{
                            opacity: status === 'loading' ? 0.7 : 1,
                            backgroundColor: status === 'success' ? '#2e7d32' : status === 'error' ? '#d32f2f' : undefined,
                            color: (status === 'success' || status === 'error') ? '#fff' : undefined
                        }}
                    >
                        {status === 'idle' && 'Enviar'}
                        {status === 'loading' && 'Enviando...'}
                        {status === 'success' && 'Enviado com sucesso!'}
                        {status === 'error' && 'Erro ao enviar. Tente novamente.'}
                    </button>
                </form>
            </div>
        </section>
    );
}