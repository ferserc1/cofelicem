
import { fail, redirect } from '@sveltejs/kit';

import { checkLogin, checkToken, getToken } from '$lib/components/auth';

const mainAdminPage = '/admin';

export const load = async ({ locals }) => {
    const { user } = locals;

    if (user) {
        throw redirect(302, mainAdminPage);
    }
}

export const actions = {
    login: async ({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;

        const token = await getToken(email,password);
        if (token) {
            cookies.set('AuthorizationToken', `Bearer ${token}`, {
                httpOnly: false,
                //path: '/',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24
            });
            throw redirect(302, mainAdminPage);
        }
        else {
            return fail(401, { message: "Invalid user or password" });
        }
    }
}