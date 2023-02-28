const pincodes = require('../pincodes.json');
module.exports = (req, res) => {
    const x = req.params.pin;
    // const arr = x.split(" ");
    // console.log(arr);
    // for(let i=0;i<arr.length;i++){
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    // console.log(arr);
    const a = pincodes.filter((e) => {
        if (e.pincode === parseInt(x)) {
            return e;
        } else if (e.taluk === x) {
            console.log("city");
            return e;
        } else if (e.stateName === x) {
            return e;
        }
    });
    res.send(a);
}