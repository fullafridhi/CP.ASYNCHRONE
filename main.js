// Iterating with Async/Await

const number = [1, 2, 3, 4];
async function iterateWithAsyncAwait(values) {
  for (const number of values) {
    console.log(number);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
  }
}

// Awaiting a Call

const asyncGetCall = async () => {
  try {
      const response =  await fetch('api/data');
       const data = await response.json();
     
       console.log(data);
     } catch(error) {
  
        console.log('Failed!', error)
       } 
  }


  // Handling Errors with Async/Await


  const fetchDataFromAPI = async () => {
    return new Promise((resolve, reject) => {
     {
        if (error) {
          reject(new Error("Failed"));
        } else {
          resolve("Data from API");
        }
      }
    });
  };
  