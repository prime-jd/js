// promises => A Promise is an object representing the eventual completion or failure of an asynchronous operation
// it takes two arguments 
//create promise

// Function to fetch data from API
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json(); // Parse JSON response
//             })
//             .then(data => {
//                 resolve(data); // Resolve with the parsed data
//             })
//             .catch(error => {
//                 reject(error); // Reject with the error
//             });
//     });
// }

// // Usage example
// const apiUrl = 'https://api.github.com/users/prime-jd';
// fetchData(apiUrl)
//     .then(data => {
//         console.log(data); // Access data from the API
//         // Process the data further as needed
//     })
//     .catch(error => {
//         console.error('There was a problem fetching data:', error);
//     });

// we can request data from apis either using 
//1. XHR(XMLHttpRequest)
//2.FETCH(URL)

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

// fetch call =>The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. 
//              It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
