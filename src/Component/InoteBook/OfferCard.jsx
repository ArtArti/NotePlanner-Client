import React from 'react'

export default function OfferCard() {
  return (
    <>
      <div className='min-h-screen w-full flex flex-wrap bg-cyan-800 justify-center items-center bg-gradient-to-t from-slate-400 to-stone-950'>
      <div className=' bg-neutral-300 rounded-lg font-mono text-lg w-72 h-96 p-5 m-5 '>
          <h1 className=' text-blue-900 text-3xl font-extrabold tracking-wide mb-3'>Free</h1>
          <p className=' leading-snug font-thin text-sm text-orange-700 will-change-scroll justify-evenly'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam.</p>
         <ul className=' leading-10 space-y-2'>
            <li>test hellow</li>
            <li>test hellow</li>
            <li>test hellow</li>
            <li>test hellow</li>
          </ul>
         </div>
         <div className=' bg-neutral-300 rounded-lg font-mono text-lg w-72 h-96 p-5 m-5 '>
          <h1 className=' text-blue-900 text-3xl font-extrabold tracking-wide mb-3'>startUp</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam.</p>
         <ul className=' leading-10 space-y-2'>
            <li>test hellow</li>
            <li>test hellow</li>
            <li>test hellow</li>
            <li>test hellow</li>
          </ul>
         </div>
      </div> 

    </>
  )
}
