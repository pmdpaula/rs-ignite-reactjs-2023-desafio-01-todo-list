import { Header } from './components/Header';
import { Todos } from './components/Todos/Todos';

import styles from './App.module.css';

import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <section>
            <Todos />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
