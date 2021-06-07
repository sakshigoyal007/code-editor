import React,{ Component, useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled} from "react-codemirror2";
import { Pen } from '@fortawesome/free-solid-svg-icons/faPen';
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const Editor=({name, value, language, onChange})=>{
    const[isOpen, setIsOpen]=useState(true);
    function handleChange(editor, data, value){
        onChange(value);
    }
    return(
        <div className={`split-container ${isOpen? '':'collapsed'}`}>
            <div className="split-title">
                {name}
                <button type="button" 
                className="editor-button"
                onClick={()=>setIsOpen(prevVal=>!prevVal)}
                >
                <FontAwesomeIcon icon={isOpen? faCompressAlt :faExpandAlt} />
                </button>
            </div>
            <Controlled value={value} 
                className="code-wrapper"
                onBeforeChange={handleChange}
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:'material'
                }}
            />
        </div>
    );
}
 
export default Editor;