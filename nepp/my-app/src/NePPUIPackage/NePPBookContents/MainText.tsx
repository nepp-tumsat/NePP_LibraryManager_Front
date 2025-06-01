import styles from './NePPBookContentsUI.module.css';

type MainTextProps = {
    text: string;
};

export function MainText({ text }: MainTextProps) {
    return <div className={styles.bookTitle}>{text}</div>;
}
