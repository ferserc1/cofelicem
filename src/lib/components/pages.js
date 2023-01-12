
import fs from 'fs';

const dataPath = 'static';
const pagesPath = `${dataPath}/pages.json`;

async function assertDataDirCreated() {
    if (!fs.existsSync(dataPath)) {
        await fs.promises.mkdir(dataPath);
    }
}

export async function getPages() {
    try {
        const pagesText = await fs.promises.readFile(pagesPath);
        return JSON.parse(pagesText);
    }
    catch (err) {
        return [
            {
                title: "Inicio",
                path: "/",
                content: "Página de inicio por defecto"
            }
        ];
    }
}

export async function addPage({ title, path, content = "" }) {
    await assertDataDirCreated();
    if  (path[0] !== '/') {
        path = `/${path}`;
    }
    const pageData = await getPages();
    pageData.push({ title, path, content });
    await fs.promises.writeFile(pagesPath, JSON.stringify(pageData), { encoding: 'utf-8' });
}

export async function removePage(pagePath) {
    await assertDataDirCreated();
    let pageData = await getPages();
    const prevLength = pageData.length;
    pageData = pageData.filter(({ path }) => pagePath !== path);
    if (prevLength !== pageData.length) {
        await fs.promises.writeFile(pagesPath, JSON.stringify(pageData), { encoding: 'utf-8' });
    }
}