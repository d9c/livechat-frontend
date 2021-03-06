import React from "react";
import ReactDOM from "react-dom/client";

import { ChatContextProvider } from "./contexts/ChatContext";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatContextProvider>
    <App />
  </ChatContextProvider>
);
