import { redirect } from "@sveltejs/kit";
import { checkToken } from "$lib/components/auth";
 
export const load = async ({ cookies, url }) => {
    const token = (cookies.get("AuthorizationToken") || "").split(" ")[1];
    const user = await checkToken(token);
    if (!user && url.pathname !== "/admin/login") {
        throw redirect(302, '/admin/login');
    }
}
