import { findCat } from '$lib/components/colony.js';

export const load = async ({ params }) => {
    const cat = await findCat(params.catName);
    return {
        cat
    }
}
