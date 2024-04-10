"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function(){
  const session = useSession()
 return(
  <>
    <div className="bg-red-500 flex flex-row justify-between">
      <div>
        <button onClick={()=>signIn()}>Signin</button>
      </div>
      <div>
        <button onClick={()=>signOut()}>Log Out</button>
      </div>
    </div>
    {JSON.stringify(session)}
  </>
 ) 
}