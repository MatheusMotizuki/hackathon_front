import axios from "axios";
import {login} from "$lib/api/auth.js";
import {redirect} from "@sveltejs/kit";
export const actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email')
        const password = form.get('password')

        const user = await login(email, password);

        throw redirect(307, '/')
    }
}