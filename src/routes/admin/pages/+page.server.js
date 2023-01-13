
import { getPages, addPage, removePage } from '$lib/components/pages.js';

export const load = async () => {
    const pages = await getPages();
    return {
        pages
    }
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const path = data.get('path');
        const content = data.get('content');
        await addPage({ title, path, content });
    },

    remove: async ({ cookies, request }) => {
        const data = await request.formData();
        const pagePath = data.get('path');
        await removePage(pagePath);
    }
}
