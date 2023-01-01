import { ChatEngine } from "react-chat-engine";

import './App.css';

const App = () => {
  return (
   <ChatEngine 
      height ='100vh'
      projectID= 'e1c79b95-14c1-46f5-8e61-86602479fe35'
      userName = 'Abdulkareem'
      userSecret= 'secret'
   />
  );
}

export default App;
