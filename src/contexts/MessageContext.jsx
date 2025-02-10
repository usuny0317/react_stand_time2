import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MessageContext = createContext();

export function ContextProvider({ children }) {
  const [message, Setmessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, Setmessage }}>
      {children}
    </MessageContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
