
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
        const name2 = data.get('name2');
        const name3 = data.get('name3');
        const colony = data.get('colony');
        const imageName = data.get('imageName');
        const description = data.get('description');
        await addCat({ name, name2, name3, imageName, colony, description });
    },

    remove: async ({ cookies, request }) => {
        const data = await request.formData();
        const name = data.get('name');
        await removeCat(name);
    }
}

