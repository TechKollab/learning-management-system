
const escapeLink=(link)=>{
const eslink=encodeURIComponent(link)
return eslink

}

const escapeInput=(input)=>{
  const regexp= new RegExp('/W*/','g')
  const escapeText=text.replace(regexp,"")
  return escapeText;

}


exports={
    escapeLink,
    escapeInput
}