import {Account, Avatars, Client, OAuthProvider} from "react-native-appwrite";
import * as Linking from "expo-linking"
import {openAuthSessionAsync} from "expo-web-browser";
import {createSession} from "@remix-run/server-runtime";


export  const config={
    platform:"com.prince.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client= new Client()

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar= new Avatars(client)
export const account= new Account(client);

export async function login(){
    try{
        const redirectUri= Linking.createURL("/")
        const response= await account.createOAuth2Token(OAuthProvider.Google, redirectUri)

        if(!response) throw new Error("Could not login")

        const broswerResponse= await openAuthSessionAsync(response.toString(), redirectUri)
        if(broswerResponse.type !== "success") throw new Error("Could not login")

        const url=new URL(broswerResponse.url)
        const secret=  url.searchParams.get("secret")?.toString()
        const userId = url.searchParams.get("userId")?.toString()

        if(!secret || !userId) throw new Error("Could not login")

        const session= await account.createSession(userId,secret)
        if(!session) throw new Error("Session could not be created")

        return true;

    }catch(err){
        console.error(err)
        return err
    }
}

export async function logout(){
    try {
        await account.deleteSession("current")
        return true

    }catch (err) {
        console.error(err)
        return false
    }
}

export async function getUser(){

    try {
        const response= await account.get()
        if(response.$id){
            const userAvatar= avatar.getInitials(response
                .name)

            return {
                ...response,
                avatar: userAvatar.toString()
            }
        }

    }catch (erro){
        console.error(err)
        return null;
    }
}