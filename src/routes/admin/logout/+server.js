import { redirect } from "@sveltejs/kit";


export async function GET({ request, cookies }) {
    cookies.set("AuthorizationToken", "");
    throw redirect(302, "/admin/login")
}

