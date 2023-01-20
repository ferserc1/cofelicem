
import { fail, redirect } from '@sveltejs/kit';

import { checkLogin, checkToken, getToken } from '$lib/components/auth';

export const load = async () => {
    return {}
}

export const actions = {
    login: async ({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;

        const token = await getToken(email,password);
        if (token) {
            cookies.set('AuthorizationToken', `Bearer ${token}`, {
                httpOnly: false,
                path: '/',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24
            });
            throw redirect(302, '/admin/colony');
        }
        else {
            return fail(401, { message: "Invalid user or password" });
        }
    }
}