import axios from "axios";
import {userStore} from "../../stores.js";
import {redirect} from "@sveltejs/kit";
import {backendUrl} from "$lib/server/constants.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password')

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: backendUrl + '/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                email: email,
                password: password
            })
        };

        let user = await axios.request(config).catch((error) => {
            console.log(error.message)
            return { success: false, error: error.message}
        })

        if (user?.data) {
            userStore.set(user.data);
            throw redirect(302, '/dashboard')
        }

        return { success: false, error: "Credenciais Invalidas"}
    },
};
