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
    onCardClick? : () => void;
};

function testFunc(){
    console.log("NePPBookContentsUIがクリックされました（デフォルト処理）");
}

export function NePPBookContentsUI({ imageSrc, 
                                       title, 
                                       description, 
                                       isAvailable, 
                                       onCardClick = testFunc}: 
                                   NePPBookContentsUIProps) 
{
    return (
        <>
            <div className={styles.container}>
                <div className={styles.bookImageWrapper}>
                    <MainImage src={imageSrc} alt="Book Cover" onImageClick={onCardClick}/>
                    <StatusText isAvailable={isAvailable} />
                </div>
            </div>
            <MainText text={title} onTextClick={onCardClick} />
            <SubText text={description} />
        </>
    );
}
