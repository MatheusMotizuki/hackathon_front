import {get} from "svelte/store";
import {userStore} from "./stores.js";
import {redirect} from "@sveltejs/kit";

const authenticationRoutes = ["/login", "/register"];
const unprotectedRoutes = [...authenticationRoutes, "/"];

export async function handle({ event, resolve }) {
    const user = get(userStore);


    return await resolve(event);
}