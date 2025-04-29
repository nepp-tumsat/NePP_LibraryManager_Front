import styles from './NePPBookContentsUI.module.css';

type AvailabilityTextProps = {
    isAvailable: boolean;
};

export function StatusText({ isAvailable }: AvailabilityTextProps) {
    return (
        <p className={styles.availability}>
            {isAvailable ? '利用可' : '利用中'}
        </p>
    );
}
