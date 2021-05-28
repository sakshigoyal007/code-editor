import React, {useState} from 'react';
import '../App.css';
import Editor from './Editor';


function App() {
  let srcUrl="https://ideone.com";

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor/>
        <Editor/>
        <Editor/>
      </div>
      <div className="bottom-pane">
        <iframe src={srcUrl}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />

      </div>
    </div>
  );
}

export default App;
