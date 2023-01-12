import { getPages } from "$lib/components/pages";

export async function load() {
    const pages = await getPages();
    return {
        pages
    }
}