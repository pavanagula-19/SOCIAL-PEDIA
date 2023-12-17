const server = "http://localhost:8080"


const loginCredentials = async ({ email, password }) => {
    try {
        const data = await fetch(`${server}/login`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        let res = await data.json();
        console.log(res)
        return res;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Error fetching data' };
    }
};

const registerDetails = async ({ userName, email, password }) => {
    try {
        const data = await fetch(`${server}/signup`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ userName, email, password })
        });
        let res = await data.json();
        console.log(res)
        return res;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Error fetching data' };
    }
};






export {
    server,
    loginCredentials,
    registerDetails
}