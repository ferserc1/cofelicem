
import fs from 'fs';
import { assertDirCreated } from './utils';

const dataPath = 'static';
export const photoDir = `${dataPath}/images`;
const colonyPath = `${dataPath}/colony.json`;

const assertDirs = async () => {
    await assertDirCreated(photoDir);
}

const saveColonyFile = async (colonyData) => {
    await assertDirs();
    await fs.promises.writeFile(colonyPath, JSON.stringify(colonyData), { encoding: 'utf-8' });
}

export async function getColony() {
    await assertDirs();
    try {
        const colonyText = await fs.promises.readFile(colonyPath);
        return JSON.parse(colonyText);
    }
    catch (err) {
        return [];
    }
}

export async function addCat({ name, photo, description, colony, name2 = "", name3 = "" }) {
    await assertDirs();
    const colonyData = await getColony();
    colonyData.push({
        name,
        name2,
        name3,
        photo,
        description,
        colony
    });
    saveColonyFile(colonyData)
}

export async function filterCat(catName) {
    const colony = await getColony();
    const re = new RegExp(catName, 'i');
    return colony.filter(({name,name2,name3}) => re.test(name) || re.test(name2) || re.test(name3));
}

export async function findCat(catName) {
    const colony = await getColony();
    return colony.filter(({name}) => name === catName);
}

export async function removeCat(catName) {
    const colony = await getColony();
    const newColony = colony.filter(({ name }) => name !== catName);
    await saveColonyFile(newColony);
}

// newCatData = { name, photo, description, colony }
export async function updateCat(catName, newCatData) {
    await assertDirs();

    if (Object.keys(newCatData).length === 0) {
        throw { status: 422, message: "No data specified" }
    }

    const catData = await findCat(catName);
    if (!catData) {
        throw { status: 404, message: "No such cat" }
    }

    Array.from(Object.keys(newCatData)).forEach(key => {
        catData[key] = newCatData[key];
    });

    await saveColonyFile(colony);
}

export async function saveImage(path, imageData) {
    // TODO: implement this
}

