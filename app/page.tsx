import { Dashboard } from "./screen/Dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <Dashboard />
    </div>
  );
}
