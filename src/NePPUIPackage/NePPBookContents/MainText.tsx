import styles from './NePPBookContentsUI.module.css';

type MainTextProps = {
    text: string;
    onTextClick? : () => void;
};

export function MainText({ text, onTextClick}: MainTextProps) {
    return <div className={styles.bookTitle} onClick={onTextClick}>{text}</div>;
}
