import React from "react";
import "./index.css";

interface Props {
  children: React.ReactNode;
  handle?: () => void;
}

export const Button: React.FC<Props> = ({ children, handle }) => {
  return (
    <button onClick={handle}>
      {children}
    </button>
  )
}