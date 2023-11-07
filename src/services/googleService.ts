
import { PUBLIC_API_KEY } from '$env/static/public'

export async function google(providerFrom: string, queryFrom : string, providerEnd:string){
  const bodyres = {
    "prompt":{
      "text":`Translate this code of ${providerFrom} : ${queryFrom} \n to ${providerEnd}. Your solution :`
    },
    
  }
  const key = PUBLIC_API_KEY
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key="+key,{
    method:"POST",
    headers:
    {
      "Content-Type":"application/json",
    },
    body:JSON.stringify(bodyres)
  })
  if(res.ok != true)
  {
    return "Error to translate"
  }
  const result = await res.json()
  const query : string = result.candidates[0].output.trim()
  return query
}