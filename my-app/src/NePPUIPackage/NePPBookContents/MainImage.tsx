import * as React from 'react';
import styles from './NePPBookContentsUI.module.css';

type MainImageProps = {
    src: string;
    alt?: string;
};

export function MainImage({ src, alt = '' }: MainImageProps) {
    return <img className={styles.bookImage} src={src} alt={alt} />;
}
