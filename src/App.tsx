import React, { FC } from "react";

import "./App.css";

import { ToDo } from "./pages/Todo";

const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <ToDo></ToDo>
      </div>
    </div>
  );
};

export default App;
