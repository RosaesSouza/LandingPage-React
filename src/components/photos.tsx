import { useMemo } from 'react';
import styles from './photos.module.css';

const PHOTOS = [
  { id: 1, url: "/src/assets/1.webp"},
  { id: 2, url: "/src/assets/2.webp"},
  { id: 3, url: "/src/assets/3.webp"},
  { id: 4, url: "/src/assets/4.webp"},
  { id: 5, url: "/src/assets/5.webp"},
  { id: 6, url: "/src/assets/6.webp"},
  { id: 7, url: "/src/assets/7.webp"},
  { id: 8, url: "/src/assets/8.webp"},
];

export const Photos = () => {
  
  const randomizedPhotos = useMemo(() => {
    const shuffled = [...PHOTOS].sort(() => Math.random() - 0.5);

    return shuffled.map((photo) => {
      const rotate = Math.floor(Math.random() * 30) - 10 ;
      return { ...photo, rotate };
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wall}>
        {randomizedPhotos.map((item) => (
          <div
            key={item.id}
            className={styles.polaroid}
            style={{
              transform: `rotate(${item.rotate}deg)`,
            }}
          >
            <div className={styles.imageWrapper}>
              <img src={item.url}/>
            </div>
            <div className={styles.pin}></div>
          </div>
        ))}
      </div>
    </section>
  );
};