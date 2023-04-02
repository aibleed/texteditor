import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: React.PropsWithChildren) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
