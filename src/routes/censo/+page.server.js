import { getColony } from '$lib/components/colony.js';

export const load = async () => {
    const colony = await getColony();
    return {
        colony
    }
}
