import fs from 'fs';

export async function assertDirCreated(dataPath) {
    if (!fs.existsSync(dataPath)) {
        await fs.promises.mkdir(dataPath, { recursive: true });
    }
}