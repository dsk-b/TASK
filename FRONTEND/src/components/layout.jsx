import React from 'react';
import { useSelector } from 'react-redux';
const ar = [];
function Layout({ setlayout }) {
    const { layouts } = useSelector((state) => state.comp);
    // console.log(layouts);
    layouts && layouts.map((item) => item.layout && ar.push(item.layout));
    const arr = ar.filter((item, i) => {
        // console.log(ar.indexOf(item) +":"+ i); 
        return ar.indexOf(item) === i;
    });
    // console.log(arr);
    return <>
        {arr.map((item, i) => {
            return <button key={i} className='text-muted text-left btn btn-light m-2' onClick={() => { setlayout(item) }}>LAYOUT - {item}</button>
        })}
    </>
}

export default Layout;