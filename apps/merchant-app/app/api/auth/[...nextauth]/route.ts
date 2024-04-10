
import prisma from "@repo/db/client";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google";


const handler = nextAuth({
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email : { label: "Email", type: "email",placeholder:"Enter your Email address"},
            password: { label: "Password", type: "password",placeholder: "Enter your Password"} 
          },
          // TODO: User credentials type from next-aut
        //   @ts-ignore
          async authorize(credentials: any) {
            console.log(credentials);
            // Do zod validation, OTP validation here
            const existingUser = await prisma.merchant.findFirst({
                where: {
                    email: credentials.email,
                    password : credentials.password
                }
            });

            if (existingUser) {

                    return {
                        email: existingUser.email
                    }
                }

            try {
                const merchant = await prisma.merchant.create({
                    data: {
                        email : credentials.email,
                        password : credentials.password
                    }
                });
                return {
                    email: merchant.email
                }
            } catch(e) {
                console.error(e);
            }
            return null
          },
        }),
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "saurabh412",
  })

  export { handler as GET, handler as POST}