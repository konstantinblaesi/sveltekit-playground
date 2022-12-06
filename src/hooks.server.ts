import type {Handle} from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname === "/") {
        return new Response(null, {
            status: 302,
            headers: {
                "Location": "/home"
            }
        })
    }
    return resolve(event)
}