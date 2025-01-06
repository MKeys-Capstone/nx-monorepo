// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { SharedComponents } from '@org/shared-components';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="external" /> */}
      <SharedComponents></SharedComponents>
    </div>
  );
}

export default App;
