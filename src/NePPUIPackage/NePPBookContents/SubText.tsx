import styles from './NePPBookContentsUI.module.css';

type SubTextProps = {
    text: string;
};

export function SubText({ text }: SubTextProps) {
    return <p className={styles.bookDescription}>{text}</p>;
}
