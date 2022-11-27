import {env} from "$env/dynamic/private"
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = () => {
    console.log("Server load, secret = ", env.SOME_SECRET)
}