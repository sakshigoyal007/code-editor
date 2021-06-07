import React, {useState} from 'react';
import '../App.css';
import Editor from './Editor';


function App() {
  // let srcUrl="https://ideone.com";

  const [html, setHtml]=useState('');
  const [js, setJs]=useState('');
  const [css, setCss]=useState('');

  const srcScript=
`
<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
</html>
`


  return (
    <div className="App">
      <div className="content input-code">
        <Editor name="HTML" value={html} language="xml" onChange={setHtml} />
        <Editor name="CSS" value={css} language="css" onChange={setCss} />
        <Editor name="JS" value={js} language="javascript" onChange={setJs} />
      </div>
      <div className="content">
        <iframe src={srcScript}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />

      </div>
    </div>
  );
}

export default App;
