import axios from "axios";
import {userStore} from "../../../stores.js";
import {redirect} from "@sveltejs/kit";
import {backendUrl} from "$lib/server/constants.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email')
        const password = formData.get('password')
        const cep = formData.get('cep')
        const phoneNumber = formData.get('phone-number')

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: backendUrl + 'auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                name: name,
                email: email,
                password: password,
                cep: cep,
                phoneNumber: phoneNumber
            })
        };

        let user = await axios.request(config).catch((error) => {
            console.log(error.message)
            return { success: false, error: error.message}
        })

        if (user?.data) {
            userStore.set({
                id: user.data.id,
                token: user.data.token,
                type: 'user'
            });
            throw redirect(302, '/user/dashboard')
        }


    },
};