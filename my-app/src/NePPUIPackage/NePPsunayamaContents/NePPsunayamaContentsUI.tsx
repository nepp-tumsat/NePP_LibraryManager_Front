import styles from './NePPsunayamaContentsUI.module.css';

      type NePPsunayamaContentsUIProps = {
        text: string;
      };
      
      export function NePPsunayamaContentsUI({ text }: NePPsunayamaContentsUIProps) {
        return (
          <div className={styles.container}>
            {text}
          </div>
        );
      }
      