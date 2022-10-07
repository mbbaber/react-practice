//Quiz questions:
// 1. make a react component to increment a number every time you click a button

import React, {useState} from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

const App = () => {
  return(
    <div>
      <FunctionalComponent/>
      <ClassComponent/>
    </div>
  )
}

export default App;