import { useState } from "react";
import ViewBoxChat from "./ViewBoxChat";

function ChatInterface() {
    const [history, setHistory] = useState([{sender:"bot", content:"Bonjour! Comment-puis-je vous aider?"}])
    const push = (message) => setHistory([...history, message])
  return (
    <ViewBoxChat>
      <div>
        <h1 className="form-title">ChatCV</h1>
      </div>
      <div className="msg-div">
        {
            Array.from(history).map(message => (
                <div className={"message-" + message.sender}>
                    <p>{message.content}</p>
                </div>
            ))
        }
      </div>
      <div>
        <input type="text" className="chat-bar" id="chatbar" onKeyUp={e => e.key === "Enter" ? push({content:e.target.value, sender:"user"}):console.log(history)}/>
      </div>
    </ViewBoxChat>
  );
}

export default ChatInterface;
