import styles from './NePPaaaaaContentsUI.module.css';

      type NePPaaaaaContentsUIProps = {
        text: string;
      };
      
      export function NePPaaaaaContentsUI({ text }: NePPaaaaaContentsUIProps) {
        return (
          <div className={styles.container}>
            {text}
          </div>
        );
      }
      