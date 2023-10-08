import {userStore} from "../../stores.js";
import {redirect} from "@sveltejs/kit";

export function GET({ url }) {
    userStore.set({})
    throw redirect(302, "/")
}