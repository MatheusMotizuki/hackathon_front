import axios from "axios";
import {userStore} from "../../stores.js";
import {redirect} from "@sveltejs/kit";

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
            url: 'http://10.0.7.10:8080/api/v1/auth/register',
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
            return { success: false, error: error.message}
        })

        if (user?.data) {
            userStore.set(user.data);
            throw redirect(302, '/dashboard')
        }


    },
};