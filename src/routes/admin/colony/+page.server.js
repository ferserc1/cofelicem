
import { getColony, addCat, findCat, removeCat, updateCat } from '$lib/components/colony.js';

export const load = async () => {
    const colony = await getColony();
    return {
        colony
    }
}

export const actions = {
    create: async ({cookies, request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const colony = data.get('colony');
        const description = data.get('description');
        // TODO: image
        await addCat({ name, colony, description });
    },

    remove: async ({ cookies, request }) => {
        const data = await request.formData();
        const name = data.get('name');
        await removeCat(name);
    }
}

