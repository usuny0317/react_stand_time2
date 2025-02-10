import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MessageContext = createContext();

export function ContextProvider({ children }) {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
