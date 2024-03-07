
import './App.css';
import appStore from './Redux/appStore';
// import Header from './components/Header';
// import Video from './components/VideoCard';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={appStore}>
       <div className="App">
    {/* <Header/> */}
    {/* <Video/> */}
    <MainComponent/>
    </div>
    </Provider>
   
  );
}

export default App;
