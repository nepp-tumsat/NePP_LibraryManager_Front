import styles from './NePPBookContentsUI.module.css';
import {MainImage} from "./MainImage";
import {MainText} from "./MainText";
import {SubText} from "./SubText";
import {StatusText} from "./StatusUI";

type NePPBookContentsUIProps = {
    imageSrc: string;
    title: string;
    description: string;
    isAvailable: boolean; 
};

export function NePPBookContentsUI({ imageSrc, title, description, isAvailable }: NePPBookContentsUIProps) {
    return (
        <div className={styles.container}>
            <MainImage src={imageSrc} alt="Book Cover" />
            <MainText text={title} />
            <SubText text={description} />
            <StatusText isAvailable={isAvailable} />
        </div>
    );
}
