"use client"
import { createThirdwebClient } from "thirdweb";


const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;


export const client = createThirdwebClient({clientId: clientId as string
});