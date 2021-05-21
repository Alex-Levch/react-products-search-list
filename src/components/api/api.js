
export const BASE_URL = 'http://dummy-api.d0.acom.cloud/';

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
};

const getFromLocalStorage = (key) => {
  return localStorage.getItem(key)
};

  // admin@test.com
  // admin123

export const sendDataToServer = async (email, password) => {
  try {
    const dataToServer = await fetch(
      `${BASE_URL}api/auth/login?email=${email}&password=${password}`,
      {
        method: 'POST',
      })

      const result = await dataToServer.json();
      const accessToken = result.access_token;
      setToLocalStorage('token', accessToken)

      return true;
  } catch {
    return false;
  }
}

export const getProductsFromServer = async (page) => {
  let api_token = getFromLocalStorage('token')

  // console.log(api_token);

  const productsFromServer = await fetch(
    `${BASE_URL}api/products?page=${page}`,
    {
      method: 'GET',
      access_token: api_token,
      // headers: {'Authorization': `Bearer ${token.access_token}`,
      // "Access-Control-Allow-Origin" : "*",
      // "Access-Control-Allow-Credentials" : true},
      // headers: {
        // token: api_token,
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // mode: 'no-cors',
      // }
    }
  )

  // console.log(productsFromServer);

    const result2 = await productsFromServer.json();

    // console.log(result2);
}

getProductsFromServer(1)

const logoutFromSite = async () => { // for button "LEAVE"
  return await fetch(
    `${BASE_URL}auth/logout`,
    {
      method: 'POST',
    }
  )
}

const refresh = async () => {
  return await fetch(
    `${BASE_URL}/api/auth/refresh`,
    {
      method: 'POST',
    }
  )
}

// const request = async (path) => {
//   const response = await fetch(`${BASE_URL}api/${path}`);
//   const result = await response.json();

//   return result;
// }

export const getProducts = () => request('products');
export const getAuthorization = () => request(`auth/login?${email}&password=${password}`);