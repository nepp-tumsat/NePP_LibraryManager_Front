import styles from './NePPaaaContentsUI.module.css';

      type NePPaaaContentsUIProps = {
        text: string;
      };
      
      export function NePPaaaContentsUI({ text }: NePPaaaContentsUIProps) {
        return (
          <div className={styles.container}>
            {text}
          </div>
        );
      }
      