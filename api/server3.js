import fetch from 'node-fetch';
export default async function handler(req,res){
const number=req.query.number;
try{
const response=await fetch(`https://bd-reverse-lookup.streamlit.app/api?number=${number}`);
const data=await response.json();
res.status(200).json(data);
}catch(e){res.status(500).json({error:"Server3 Error"});}
}
