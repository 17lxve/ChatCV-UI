import { ReactNode } from "react";

function ViewBox({ children }: { children: ReactNode }) {
  return <div className="view-box">{children}</div>;
}

export default ViewBox;
