import styles from './NePPBookContentsUI.module.css';
import availableImg from './Assets/Available.png';
import checkedOutImg from './Assets/CheckedOut.png';

type AvailabilityTextProps = {
    isAvailable: boolean;
};

export function StatusText({ isAvailable }: AvailabilityTextProps) {
    const imageSrc = isAvailable ? availableImg : checkedOutImg;
    
    return (
        <div className={styles.bookAvailability}>
            <img src={imageSrc} alt={isAvailable ? '利用可' : '利用中'} />
        </div>
    );
}
