import fs from 'fs';

export async function assertDirCreated(dataPath) {
    if (!fs.existsSync(dataPath)) {
        await fs.promises.mkdir(dataPath, { recursive: true });
    }
}

export const uploadImage = async (fileName,imgBase64) => {
    const data = {};
    const imgData = imgBase64.split(',');
    data.image = imgData[1];
    data.fileName = fileName;
    await fetch(`/admin/colony/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
}