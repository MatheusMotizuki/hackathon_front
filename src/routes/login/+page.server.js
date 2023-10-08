import axios from "axios";
import {userStore} from "../../stores.js";
import {redirect} from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password')

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://10.0.7.10:8080/api/v1/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                email: email,
                password: password
            })
        };

        let user = await axios.request(config).catch((error) => {
            return { success: false, error: error.message}
        })

        if (user?.data) {
            userStore.set(user.data);
            throw redirect(302, '/dashboard')
        }

        return { success: false, error: "Credenciais Invalidas"}
    },
};
