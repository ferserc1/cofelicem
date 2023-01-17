import path from 'path';
import { writeFile } from 'fs/promises';
import { assertDirCreated } from '$lib/components/utils';
import { photoDir } from '$lib/components/colony';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    assertDirCreated(photoDir);
    const data = await request.json();
    const imgData = data.image;
    const fileName = data.fileName;
    const filePath = path.join(photoDir, fileName);
    console.log(filePath);
    await writeFile(filePath, imgData, 'base64');
    return json({ status: true });
}

