const express = require('express');
const app = express();

//req = request
//res = response
// app.use('/', (req, res)=>{
//     res.send("Hello World");
// });

app.get('/', (req, res) => {
    res.send("Hello aku method GET");
});

app.post('/', (req, res) => {
    res.send("Hello aku method POST");
});

app.put('/', (req, res) => {
    res.send("Hello aku method PUT");
});

app.delete('/', (req, res) => {
    res.send("Hello aku method DELETE");
});

app.listen(3000, () => {
    console.log("Server running on port: 3000");
});