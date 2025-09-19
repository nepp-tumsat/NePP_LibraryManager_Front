import styles from './NePPBookContentsUI.module.css';

type MainImageProps = {
    src: string;
    alt?: string;
    onImageClick?: () => void;
};

export function MainImage({ src, alt = '', onImageClick}: MainImageProps) {
    return <img className={styles.bookImage} src={src} alt={alt} onClick={onImageClick}/>;
}
