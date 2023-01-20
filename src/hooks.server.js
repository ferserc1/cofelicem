
import { checkToken } from "$lib/components/auth";
import { parse } from "cookie";

export const handle = async ({event,resolve}) => {
    const { headers } = event.request;
    const cookies = parse(headers.get("cookie") ?? "");

    if (cookies.AuthorizationToken) {
        const token = cookies.AuthorizationToken.split(" ")[1];

        const userData = checkToken(token);
        if (userData) {
            event.locals.user = userData;
        }
    }

    return await resolve(event);
}
