import { ReactNode } from "react";

function ViewBox({ children }: { children: ReactNode }) {
  return <div className="view-box-chat">{children}</div>;
}

export default ViewBox;
