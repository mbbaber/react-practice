//Quiz questions:
// 1. make a react component to increment a number every time you click a button

import React, {useState} from "react";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import News from "./components/News";

const App = () => {
  return(
    <div>
      <FunctionalComponent/>
      <ClassComponent/>
      <News/>
    </div>
  )
}

export default App;