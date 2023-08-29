import { log } from "console";
import http from "http";

export const server= http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"})
res.end(
    JSON.stringify({
        data:"it works"
    })
)
})
const port = 3000
server.listen(port,()=>{
    console.log(`Server start on port :${port}`);
    
})