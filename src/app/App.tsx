import { AppRouter } from './providers/router';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles/index.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
