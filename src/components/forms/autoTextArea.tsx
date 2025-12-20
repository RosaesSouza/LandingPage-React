import { useEffect, useRef, type TextareaHTMLAttributes } from 'react';
import styles from './AutoTextArea.module.css';

interface AutoTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

export const AutoTextArea = (props: AutoTextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [props.value]);

  return (
    <textarea
      {...props} 
      ref={textareaRef}
      className={`${styles.textarea} ${props.className || ''}`}
      rows={1}
    />
  );
};