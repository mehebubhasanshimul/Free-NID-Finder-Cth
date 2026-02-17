import fetch from 'node-fetch';
export default async function handler(req,res){
try{
const {number}=req.body;
const response=await fetch(`https://nid-phone-fastapi.fly.dev/phone`,{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({number})
});
const data=await response.json();
res.status(200).json(data);
}catch(e){res.status(500).json({error:"Server2 Error"});}
}
