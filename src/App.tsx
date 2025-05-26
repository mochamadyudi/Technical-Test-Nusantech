import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import store, { persistor } from './redux/store'
import Views from './views';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Views/>
      </PersistGate>
    </Provider>

  )
}

export default App
