let jwt = localStorage.getItem('jwt');
let AuthStr = jwt;
let user = localStorage.getItem('userId');

const getToken = () => {
    const globalStore = store.getState();
    let bearerToken;

    if (globalStore.userLogin.userInfo) {
        bearerToken = globalStore.userLogin.userInfo.token;
    } else {
        bearerToken = AuthStr;
    }

    return bearerToken;
};

export default getToken;
