"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name,setName] =  useState("");
  const { push } = useRouter();
  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    push(`/predict/${name}`);
   
  }  
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 text-white">
       <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-4xl font-bold mb-8">Enter your name</h1>
       </div>
       <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <input className="bg-gray-900 p-4 rounded-lg border-0" type="text" name="name" placeholder="Your Name" value= {name} onChange={(e)=>setName(e.target.value)} />
          <button className=" bg-blue-900 p-4 rounded-lg ml-2 cursor-pointer" type="submit">Predict..</button>
        </form>
       </div>
    </main>
  );
}
