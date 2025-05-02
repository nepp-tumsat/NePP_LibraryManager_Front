import styles from './NePPBookContentsUI.module.css';

type MainTextProps = {
    text: string;
};

export function MainText({ text }: MainTextProps) {
    return <h1 className={styles.bookTitle}>{text}</h1>;
}
