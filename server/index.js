const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
console.log('Сервер запущен. Порт сервера: ${port}'); 
});
app.get("/", (reaq, res) => {
    res.send("HELLO LORD!");
});
