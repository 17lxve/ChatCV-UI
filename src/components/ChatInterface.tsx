import ViewBox from "./ViewBox";

function ChatInterface() {
  return (
    <ViewBox>
      <div>
        <h1 className="form-title">ChatCV</h1>
      </div>
      <div>History</div>
      <div>
        <input type="text" />
      </div>
    </ViewBox>
  );
}

export default ChatInterface;
