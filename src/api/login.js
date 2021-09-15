export function login(username, password) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`login username : ${username} password: ${password}` );
            resolve();
        }, 1000);
    });
}