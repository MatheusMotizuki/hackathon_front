import {get} from "svelte/store";
import {userStore} from "./stores.js";
import {redirect} from "@sveltejs/kit";

const authenticationRoutes = ["/user/login", "/user/register", "/school/login", "/school/register"];
const unprotectedRoutes = [...authenticationRoutes, "/"];

export async function handle({ event, resolve }) {
    const user = get(userStore);

    if (user?.token && authenticationRoutes.includes(event.url.pathname)) {
        throw redirect(302, '/user/dashboard')
    }

    if (!user?.token && !unprotectedRoutes.includes(event.url.pathname)) throw redirect(302, '/')


    return await resolve(event);
}