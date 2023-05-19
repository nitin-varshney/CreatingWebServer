const http =require("http");

const server=http.createServer((req,res)=>{
    res.end('Hello and Welcome 6from the other side ');

});

server.listen(8000,"127.0.0.1",()=>{

console.log("Listening the port number 8000");
});