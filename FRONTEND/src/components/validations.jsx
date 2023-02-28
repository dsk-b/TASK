export function handleValidation(eve) {
    // eve.target.style.border = "unset";
    const fieldValue = eve.target.value;
    const regexp = new RegExp(eve.target.pattern);
    const isMatch = regexp.test(fieldValue);
    const errMsg = eve.target.alt;

    if (!isMatch) {
        eve.target.style.border = "2px solid red";
        if (eve.target.nextSibling.textContent !== eve.target.alt) {
            eve.target.insertAdjacentHTML('afterend', `<span style="color :red; width:100%; margin: 10px 0px 10px 20px;"></span>`);
            eve.target.nextSibling.textContent = errMsg;
        }
    } else {
        eve.target.style.border = "2px solid green";
        if (eve.target.value == "" && eve.target.nextSibling.tagName === "SPAN") {
            eve.target.nextSibling.remove();
        }
        if (eve.target.nextSibling.tagName === "SPAN") {
            eve.target.nextSibling.remove();
        }
        if (eve.target.type === "number" && eve.target.nextSibling.tagName === "SPAN") {
            eve.target.nextSibling.remove();
        }
        if (eve.target.value === "") {
            eve.target.style.border = "unset";
        }
    }
    // ----------------------------------------------------------
    if (eve.target.value === "" && eve.target.nextSibling.tagName === "SPAN") {
        eve.target.nextSibling.remove();
        eve.target.style.border = "unset";
    }
    // -------------------------------- auto fill specific fields ----------------------------
    if (eve.target.name === "zipcode") {
        if (eve.target.value.length === eve.target.maxLength) {
            fetch(`http://localhost:3000/pincode/${eve.target.value}`).then(res => res.json()).then(val => {
                document.getElementsByName("state")[0].value = val[0].stateName;
                document.getElementsByName("city")[0].value = val[0].taluk;
            });
        }else{
            document.getElementsByName("state")[0].value = "";
            document.getElementsByName("city")[0].value = "";
        }
    }
    if(eve.target.name === "city"){
        
    }
}

export function handleSubmit(eve) {
    eve.preventDefault();
    const x = {};
    for (let i = 0; i < eve.target.length - 1; i++) {
        eve.target[i].style.border = "none"
        if (eve.target[i].value === "") {
            eve.target[i].style.border = "2px solid red";
        } else {
            x[eve.target[i].name] = eve.target[i].value;
            // alert([eve.target[i].name] + ":" + [eve.target[i].value]);
        }
    }
    // return alert(x);
    // return console.log(x);
}