import axios from "axios";
import {userStore} from "../../stores.js";
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email')
        const password = formData.get('password')
        const cep = formData.get('cep')
        const phoneNumber = formData.get('phone-number')
        console.log(formData)


    },
};