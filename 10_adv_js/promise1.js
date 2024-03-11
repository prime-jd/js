// promises => A Promise is an object representing the eventual completion or failure of an asynchronous operation
// it takes two arguments 
//create promise
const promiseOne = new Promise(function(resolve, reject) {
    // Perform any asynchronous operation
    // For example, DB calls, cryptography, etc.
    let req;
    
     fetch('https://api.github.com/users/prime-jd') 
        //console.log(req)
        resolve();
});

promiseOne.then(function(user) {
    //console.log(user);
     return user.json();
}).then(function(data){
    console.log(data)
}).catch(function(error) {
    console.error('Error occurred:', error);
});

// Function to fetch data from API
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON response
            })
            .then(data => {
                resolve(data); // Resolve with the parsed data
            })
            .catch(error => {
                reject(error); // Reject with the error
            });
    });
}

// Usage example
const apiUrl = 'https://api.github.com/users/prime-jd';
fetchData(apiUrl)
    .then(data => {
        console.log(data); // Access data from the API
        // Process the data further as needed
    })
    .catch(error => {
        console.error('There was a problem fetching data:', error);
    });


