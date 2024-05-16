/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import ViewBoxChat from "./ViewBoxChat";
import axios from "axios";
import { API } from "./api/url";

function ChatInterface() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [history, setHistory] = useState([
    { sender: "bot", content: "Bonjour! Comment-puis-je vous aider?" },
  ]);
  const push = (message: { content: string; sender: string }) => {
    setHistory([...history, message]);
    document.getElementById("chatter")!.scrollTop =
      document.getElementById("chatter")!.scrollHeight + 100;
    document.getElementById("chatbar")!.classList.add("loading"); //@ts-ignore
    document.getElementById("chatbar")!.disabled = true;
    axios
      .post(API + "chat", { question: message.content }) //@ts-ignore
      .then((result) => {
        console.log(result);
        setHistory([
          ...history,
          message,
          result.data.statusCode === "500"
            ? { content: "error!", sender: "bot" }
            : {
                content: result.data.text || result.data.message,
                sender: "bot",
              },
        ]);
        document.getElementById("chatter")!.scrollTop =
          document.getElementById("chatter")!.scrollHeight + 100;
      })
      .catch((err) => console.warn(err))
      .then(() => {
        //@ts-ignore
        document.getElementById("chatbar")!.value = "";
        document.getElementById("chatbar")!.classList.remove("loading"); //@ts-ignore
        document.getElementById("chatbar")!.disabled = false;
        document.getElementById("chatter")!.scrollTop =
          document.getElementById("chatter")!.scrollHeight + 100;
        document.getElementById("chatbar")!.focus();
      });
  };
  return (
    <ViewBoxChat>
      <div>
        <h1 className="form-title">ChatCV</h1>
      </div>
      <div>
        {Array.from(history).map((message) => (
          <div
            className={"message-" + message.sender}
            key={Math.random() * 500 + message.sender}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          className="chat-bar"
          id="chatbar"
          placeholder="Parler au chat"
          onKeyUp={
            //@ts-ignore
            (e) =>
              e.key === "Enter"
                ? push({ content: e.target.value, sender: "user" })
                : ""
          }
        />
      </div>
    </ViewBoxChat>
  );
}

export default ChatInterface;
