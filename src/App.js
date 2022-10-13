import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import IsiTodo from './components/IsiTodo';
import { store, persistor } from "./store/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <><br/><br/><br/><br/>
            <header>
              <h1>todos</h1>
            </header>
            <IsiTodo/>
          </>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
