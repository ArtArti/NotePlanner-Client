import { CCallout } from "@coreui/react";
import React from "react"

export default function Greeting() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const myStyle ={ }
  

  if (curDate >= 1 && curDate < 12) {
    greeting = "GOOD MORNING";
    myStyle.color='white';
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "GOOD AFTERNOON";
    myStyle.color ='white';
  } else {
    greeting = "GOOD NIGHT";
    myStyle.color = 'white';
  }

  return (
    <>
          <CCallout  className="justify-center items-center flex flex-wrap h-40 font-extrabold text-justify text-red-800 bg-gradient-to-t from-slate-600 to-slate-500">
          <h1 className=' font-mono text-3xl fo'>HELLO ,<span style={myStyle} className=" font-sans">{greeting}</span></h1>
          </CCallout>
        
    </>
  );
}
