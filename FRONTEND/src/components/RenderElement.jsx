import React,{useRef} from 'react';
import { handleSubmit, handleValidation } from './validations';
export default function RenderEle({ e }) {
    // console.log(e);
    if (typeof e.component !== "undefined" && e.error !== "undefined") {
        switch (e.component) {
            case "form" : return React.createElement(e.component, {onSubmit:handleSubmit,className:e.className},e.children && e.children.map((item,i)=>{
                return <RenderEle e={item} key={i} />
            }) )
            case "button": return React.createElement(e.component, { type: e.type, className: e.className }, e.value);
            case "input": if (e.name === "zipcode" && e.max) {
                return <>{React.createElement(e.component,
                    { onChange: (ev) => handleValidation(ev),maxLength:e.max,title:e.autofill, autoComplete: e.autocomplete, alt: e.error, name: e.name, type: e.type, pattern: e.validate, placeholder: e.placeholder, className: e.className },
                    e.children && "")}</>
            } else {
                return <>{React.createElement(e.component,
                    { autoComplete: e.autocomplete, onChange: (eve) => handleValidation(eve), alt: e.error, name: e.name, type: e.type, pattern: e.validate, placeholder: e.placeholder, className: e.className },
                    e.children && "")}</>
            }
            case "label": return React.createElement(e.component, { className: "m-1" }, e.value);
            case "select": return React.createElement(e.component, { className: e.className }, e.children && e.children.map((e, i) => {
                return <RenderEle key={i} e={e} />
            }));
            case "option": return React.createElement(e.component, {}, e.value);
            case "textarea": return React.createElement(e.component, {}, "");
            default: return <></>
        }
    }
    return <pre>NO ELEMENT TO RENDER</pre>
}
