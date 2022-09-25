import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from '../src/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
