import {get} from "svelte/store";
import {userStore} from "../../stores.js";
import {redirect} from "@sveltejs/kit";

export function load({ params }) {
    const user = get(userStore);

    if (user.token && user.type !== 'school') throw redirect(302, '/school/login')
}


