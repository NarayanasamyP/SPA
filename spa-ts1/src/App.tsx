import './App.css';
import { Home } from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
// export default AppNav;

function App() {
  return (
    <>
  <Provider store={store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
    </>
    
  );
}

export default App;
