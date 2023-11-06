
import { PUBLIC_API_KEY } from '$env/static/public'

export async function google() {
  const bodyres = {
    "prompt":{
      "text":"Give me table in SQL"
    }
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
  const result = await res.json()
  console.log(result)
}