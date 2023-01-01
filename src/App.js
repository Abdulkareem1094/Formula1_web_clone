// import { ChatEngine } from "react-chat-engine";

// import './App.css';

// const App = () => {
//   return (
//    <ChatEngine 
//       height ='100vh'
//       projectID= 'e1c79b95-14c1-46f5-8e61-86602479fe35'
//       userName = 'Abdulkareem'
//       userSecret= 'secret'
//    />
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  // Set up state to store the chat history and the text of the current message
  const [chatHistory, setChatHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  async function chatWithAI(text) {
    // Set up the API URL
    const API_URL = 'https://api.openai.com/v1/chat';

    // Set up the request payload
    const data = {
      text: text
    };

    // Set up the request options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer`
      },
      body: JSON.stringify(data)
    };

    // Send the request
    try {
      const response = await fetch(API_URL, options);
      const responseData = await response.json();
      return responseData.text;
    } catch (error) {
      console.error(error);
    }
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    // Send the current message to the Chat GPT API
    chatWithAI(currentMessage).then(responseText => {
      // Add the current message and the response to the chat history
      setChatHistory([...chatHistory, { text: currentMessage, sender: 'user' }, { text: responseText, sender: 'ai' }]);
      // Clear the current message
      setCurrentMessage('');
    });
  }

  // if (response.ok) {
  //   // The request was successful
  //   const responseData = await response.json();
  //   return responseData.text;
  // } else {
  //   // There was an error with the request
  //   console.error(response.statusText);
  // }

  return (
    <div className="chat">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={currentMessage}
          onChange={event => setCurrentMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
