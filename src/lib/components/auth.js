
import jwt from 'jsonwebtoken';

const defaultSecret = "BA34490FE223EEDC1073";
const secret = defaultSecret; // TODO: get secret from configuration file

const encodeToken = (dataObject) => {
    const token = jwt.sign(dataObject, secret);
    return token;
}

const decodeToken = (token) => {
    try {
        const dataObject = jwt.verify(token, secret);
        console.log(dataObject);
        return dataObject;
    }
    catch (err) {
        return null;
    }
}

const userData = [
    {
        login: "info@cofelicem.org",
        pass: "vangoghRubito"
    }
]
export const checkLogin = async (user, pass) => {
    const result = userData.find(userData => {
        return userData.login === user && userData.pass === pass
    });
    return result;
}

export const getToken = async (user,pass) => {
    const loginValid = await checkLogin(user,pass);
    if (loginValid) {
        return encodeToken({ user, pass });
    }
    else {
        return null;
    }
}
 
export const checkToken = async (token) => {
    const dataObject = decodeToken(token);
    return dataObject;
}
