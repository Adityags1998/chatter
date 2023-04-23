import {ChatEngine} from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
     <ChatEngine 
      height = '100vh'
      projectID = '3e1509ad-89be-4518-8285-b2cafec8268f' 
      userName = 'John'
      userSecret = 'qwerty'
      />
    </div>
  );
}

export default App;
