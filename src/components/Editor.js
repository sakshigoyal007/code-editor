import React, { Component } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled} from "react-codemirror2";
import { Pen } from '@fortawesome/free-solid-svg-icons/faPen';


const Editor=({name, value, language, onChange})=>{
    function handleChange(value, data, editor){
        onChange(value);
    }
    return(
        <div className="split-container">
            <div className="split-title">
                {name}
                <button>
                open/close
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