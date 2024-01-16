// // api_call using auth in JSON

// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         username: 'kminchelle',
//         password: '01elplr',
//         //expireInMins: 60, //optional
//     })
// })
// .then(res => res.json())
// .then(console.log);

// //provideing token in bearer
// fetch('https://dummyjson.com/auth/me',{
//     method: 'GET',
//     headers: {
//         // 'Authorization': 'Bearer'  //Your_token_here,
//     },
// })
// .then(res => res.json())
// .then(console.log)


fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);


/* providing token in bearer */
fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
  }, 
})
.then(res => res.json())
.then(console.log)


// 1st Explaination 
                    // Certainly! The provided code is an example of using the Fetch API in JavaScript to perform a login and then make an authenticated request. Let's break it down step by step:

                    // 1. **Login Request:**
                    // ```javascript
                    // fetch('https://dummyjson.com/auth/login', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify({
                    //     username: 'kminchelle',
                    //     password: '0lelplR',
                    //     })
                    // })
                    // .then(res => res.json())
                    // .then(console.log);
                    // ```
                    // - This code sends a POST request to the URL 'https://dummyjson.com/auth/login'.
                    // - The request includes a JSON payload with a username and password.
                    // - The server is expected to respond with JSON data, and the response is logged to the console.

                    // 2. **Authenticated Request:**
                    // ```javascript
                    // fetch('https://dummyjson.com/auth/me', {
                    //     method: 'GET',
                    //     headers: {
                    //     'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
                    //     }, 
                    // })
                    // .then(res => res.json())
                    // .then(console.log);
                    // ```
                    // - This code sends a GET request to the URL 'https://dummyjson.com/auth/me'.
                    // - It includes an 'Authorization' header with a bearer token. The comment indicates that you need to replace '/* YOUR_TOKEN_HERE */' with an actual token.
                    // - The server is expected to respond with JSON data, and the response is logged to the console.

                    // In summary, the first part of the code simulates a login by sending a POST request with a username and password. The second part demonstrates how to make an authenticated request by including a bearer token in the 'Authorization' header. The actual token needs to be obtained after a successful login and should replace '/* YOUR_TOKEN_HERE */' in the second fetch request.


//2nd Explaination 
            // Certainly! Let's go into more detail on each part of the code:

            // ### 1. Login Request:

            // ```javascript
            // fetch('https://dummyjson.com/auth/login', {
            // method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     username: 'kminchelle',
            //     password: '0lelplR',
            // })
            // })
            // .then(res => res.json())
            // .then(console.log);
            // ```

            // - **`fetch()`**: This is a built-in function in JavaScript used to make HTTP requests. In this case, it's making a POST request to 'https://dummyjson.com/auth/login'.

            // - **Request Configuration**:
            // - **`method: 'POST'`**: Specifies that this is a POST request.
            // - **`headers: { 'Content-Type': 'application/json' }`**: Sets the content type of the request body to JSON.
            // - **`body: JSON.stringify({ username: 'kminchelle', password: '0lelplR' })`**: Converts the provided object into a JSON string and sends it as the request body. This object includes a username and password for authentication.

            // - **`.then(res => res.json())`**: This is a promise chain. It waits for the response from the server, and when it arrives, it converts the response body to JSON.

            // - **`.then(console.log)`**: Once the JSON conversion is done, it logs the resulting data to the console. This would typically include information about the authentication status or a token.

            // ### 2. Authenticated Request:

            // ```javascript
            // fetch('https://dummyjson.com/auth/me', {
            // method: 'GET',
            // headers: {
            //     'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
            // }, 
            // })
            // .then(res => res.json())
            // .then(console.log);
            // ```

            // - **`fetch('https://dummyjson.com/auth/me', { ... })`**: Similar to the previous fetch, but this time it's a GET request to 'https://dummyjson.com/auth/me'.

            // - **Request Configuration**:
            // - **`method: 'GET'`**: Specifies that this is a GET request.
            // - **`headers: { 'Authorization': 'Bearer /* YOUR_TOKEN_HERE */' }`**: Sets the 'Authorization' header with a bearer token. Note that you need to replace '/* YOUR_TOKEN_HERE */' with an actual token obtained after a successful login.

            // - **`.then(res => res.json())`**: This is again a promise chain, waiting for the server's response and converting it to JSON.

            // - **`.then(console.log)`**: Finally, it logs the JSON data to the console. This response would typically contain information about the authenticated user.

            // In summary, the first part logs in by sending a POST request with a username and password. The second part makes an authenticated request using a token obtained during login, and it logs the response data to the console. The token is crucial for authenticating subsequent requests.