import { redirect } from "@sveltejs/kit";


export async function GET({ request, cookies }) {
    cookies.set("AuthorizationToken", "", {
        httpOnly: false,
        path: '/',
        sameSite: 'strict',
        secure: false,
        maxAge: 60 * 60 * 24
    });
    throw redirect(302, "/admin/login")
}

