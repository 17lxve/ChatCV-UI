/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { ChatInterface, MainBox } from "../components";
import { API } from "../components/api/url";

function ChatPage() {
  const upsert = () => {
    //@ts-ignore
    document.getElementById("upsert-button").disable = true;
    //@ts-ignore
    document.getElementById("upsert-button").classList.add("loading");

    axios
      .post(API + "chat/upsert")
      .then(() => alert("Base de données à jour !"))
      .catch((err) => alert(`Erreur: ${err}`))
      .then(() => {
        //@ts-ignore
        document.getElementById("upsert-button").disable = false;
        //@ts-ignore
        document.getElementById("upsert-button").classList.remove("loading");
      });
  };
  return (
    <MainBox>
      <ChatInterface />
      <button className="upsert" id="upsert-button" onClick={() => upsert()}>
        Rafraîchir la base de données 🔄️
      </button>
    </MainBox>
  );
}

export default ChatPage;
