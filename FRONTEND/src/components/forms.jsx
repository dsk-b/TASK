import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import RenderEle from './RenderElement';

export default function RenderComp() {
    const { formLayout } = useSelector((state) => state.comp);
    const [form, setform] = useState();
    //------------------------ fetching forms based on layout number -------------------
    useEffect(() => {
        fetch(`http://localhost:3000/forms/` + formLayout).then(res => res.json()).then(val => setform(val));
    }, [formLayout]);
    return form && form.map((item, i) => {
        return <span key={i}>
            <h3 className='text-center'>{item.form_label}</h3>
            <RenderEle e={item} />
        </span>
    })
}