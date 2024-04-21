"use client"
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export function Providers({children}:any){
return( 
    <RecoilRoot>
        <SessionProvider>     
            {children}
        </SessionProvider>
    </RecoilRoot>
    )
}