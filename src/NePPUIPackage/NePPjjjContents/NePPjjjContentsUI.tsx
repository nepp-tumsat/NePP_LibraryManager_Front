import styles from './NePPjjjContentsUI.module.css';

      type NePPjjjContentsUIProps = {
        text: string;
      };
      
      export function NePPjjjContentsUI({ text }: NePPjjjContentsUIProps) {
        return (
          <div className={styles.container}>
            {text}
          </div>
        );
      }
      