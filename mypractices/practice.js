console.log("hlo")
//map 
/*
const arr =[2,5,8,4,4]


function double(x){
    return x*2;
}
function triple (x){
    return x*3;
}
function binary (x){
    return x.toString(2);
}
const output = arr.map(binary);//map(double).map(triple)
  
console.log(output);

//filter
const arr1 = [3,6,7,9,34,3]
function isEven(x){
    return x%2 ===0;
}
function isodd(x){
     return x%2 ;
}
function greaterThan4(x){
    return x>4;
}
const outputfornum = arr1.filter(greaterThan4);
//const outputfornum = arr1.filter((x)=> x>4);
 console.log(outputfornum)

  
 //reduce 

 //by function
 const arr2 = [3,5,3,2,4,1]
 function findsum (arr2){
    let sum = 0 ;
    for (let i = 0 ; i < arr2.length; i++){
sum= sum +arr2[i]
    }
        return sum
    }
 console.log(findsum(arr2));
 

//by reduce
const arr3 = [1,1,1,1,1,]
const output3 = arr3.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
},0);
console.log(output3);


/////finding max num by fn
const arr4 = [2,1,1,1,1]
function findMax (arr4){
    let max = 0 ;
    for (let  i = 0 ; i< arr4.length; i++) {
        if (arr4[i]>max){
            max= arr4[i];
        }
    }
return max;
}
console.log(findMax(arr4));

//max num by reduce // answer will be 0
const arr5 = [0,0,0,0]

const output5 = arr5.reduce(function(max,curr){
    if (curr>max){
        max=curr;
    }
    return max
},0);
console.log(output5);

/////finding mini num by fn
const arr6= [0,0,0,0]
function findMini (arr6){
    let Mini =Infinity;
    for(let i = 0 ; i <arr6.length; i++){
        if (arr6[i]<Mini){
            Mini = arr6 [i];
        }
    }
    return Mini;
}
console.log(findMini(arr6))

//mini num by reduce 
const arr7 = [30,50,80,30,7];
const output7 = arr7.reduce(function(mini,curr){
    if (curr<mini){
        mini=curr;
    }
    return mini;
},arr7[0]);
console.log(output7)

const users = [
    {firstName : "vasudev" , lastName : "sharma" ,age:18 },
    {firstName : "mayank" , lastName : "upadhyay" ,age:28 },
    {firstName : "namrta" , lastName : "upadhyay" ,age:25 },
    {firstName : "tapasya" , lastName : "upadhyay" ,age:8 },
];

const output8 = users.map((x) => x.firstName +" "+ x.lastName);
console.log(output8)

const output9 = users.reduce(function(acc,curr){
if(acc[curr.age]){
    acc[curr.age]=  ++acc [curr.age];
}else{
    acc[curr.age]=1;
}
return acc
},{});
console.log(output9)

//those person whose age below 30 // by using together  filter and map 
const output10 = users.filter((x) => x.age<30).map((x)=>x.firstName);
console.log(output10)

const firstNamesBelow30 = users.reduce((acc, user) => {
    if (user.age < 30) {
        acc.push(user.firstName);
    }
    return acc;
}, []);

//those person whose age below 30 // by using only reduce method
console.log(firstNamesBelow30);


//promise
let promise = new Promise(function(resolve, reject) {
    // Do some asynchronous work
    let success = true; // or false, to simulate success or failure

    if (success) {
        resolve("hacked successful!y"); // Call resolve on success
    } else {
        reject("error in heacking, failed!"); // Call reject on failure
    }
});
console.log("9001025477")
promise
    .then(function(result) {
        console.log(result); // "Operation was successful!" if success is true
    })
    .catch(function(error) {
        console.log(error); // "Operation failed!" if success is false
    });



    function fetchDataFromAPI() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = {
                    simId: "09*****0",
                    userName: "vasu",
                    userEmail: "vasudevsharma9413@gmail.com"
                };
                const success = true; // Simulating successful API response
    
                if (success) {
                    resolve(data); // Resolving with data
                } else {
                    reject("API call failed"); // Rejecting on failure
                }
            }, 2000); // Simulate network delay of 2 seconds
        });
    }

    // use Chaining Promises means use promise in the .then
   
    fetchDataFromAPI()
        .then((response) => {
            console.log("API Data:", response); // Handling the success
        return new Promise ((resolve)=>{ setTimeout(()=>{
            resolve ("done,loading data");
        },1000);
    });
})
.then((message)=>{
    console.log(message);
})
       
        .catch((error) => {
            console.log("Error:", error); // Handling failure
        });


        

        //Use Promise.all() to Handle Multiple Asynchronous Tasks
        let promise1 = new Promise((resolve) => setTimeout(() => resolve("First task completed."), 1000));
let promise2 = new Promise((resolve) => setTimeout(() => resolve("Second task completed."), 1500));

Promise.all([promise1, promise2])
    .then((messages) => {
        console.log(messages[0]); // First task completed.
        console.log(messages[1]); // Second task completed.
    })
    .catch((error) => {
        console.log("Error: " + error);
    });



    //callback function 
    
    function tryclbk (name , age , gmail,callback){
        console.log(`hlo,${name}`);
        console.log (`your gmail=${gmail}`)
        console.log(`your age = ${age}`)
        callback()
    }
    function clingclbck (){
        console.log("your call back functon is runing ")
    }
    tryclbk("vasu","18","vasudevsharma18@gmail.com",clingclbck)

    //Callbacks with Asynchronous Code
    function tryclbk2 (name , age , gmail,callback){
        
      setTimeout(()=> {console.log(`hlo,${name}`);
      console.log (`your gmail=${gmail}`)
        console.log(`your age = ${age}`)
      callback()},9000)  ;
    }
    function clingclbck2 (){
        console.log("your call back functon2 is runing ")
    }
    tryclbk2("vasu2","18","vasudevsharma18@gmail.com",clingclbck2)

    */
    function fetchUserData(userId, callback) {
        console.log(`Fetching data for user with ID: ${userId}...`);
        setTimeout(() => {
            const userData = { id: userId, name: "Vasu", age: 18 };
            console.log("User data fetched:", userData);
            callback( null,userData); // Pass data to the callback
        }, 2000);
    }
    
    function processUserData(userData, callback) {
        console.log("Processing user data...");
        setTimeout(() => {
            if (!userData) {
                callback("No user data provided", null); // Handle errors
                return;
            }
            const processedData = { ...userData, status: "processed" };
            console.log("User data processed:", processedData);
            callback(null, processedData);
        }, 2000);
    }
    
    function saveUserData(processedData, callback) {
        console.log("Saving processed data...");
        setTimeout(() => {
            if (!processedData) {
                callback("No processed data to save", null);
                return;
            }
            console.log("Processed data saved:", processedData);
            callback(null, "Success");
        }, 2000);
    }
    
    // Using the callbacks
    fetchUserData(101, (err, userData) => {
        if (err) {
            console.error("Error fetching user data:", err);
            return;
        }
        processUserData(userData, (err, processedData) => {
            if (err) {
                console.error("Error processing user data:", err);
                return;
            }
            saveUserData(processedData, (err, result) => {
                if (err) {
                    console.error("Error saving user data:", err);
                    return;
                }
                console.log("All operations completed successfully:", result);
            });
        });
    });


 //async await 
//compare btw promise and async await 

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data); // Output: Data fetched!
});

//by async function 
async function fetchDataAsync() {
    const data = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
    console.log(data); // Output: Data fetched!
}

fetchDataAsync();


// Simulating API Calls with Async/Await
async function fetchUser(userId) {
    console.log("Fetching user...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) reject("Invalid user ID");
            else resolve({ id: userId, name: "Vasu" });
        }, 2000);
    });
}

async function fetchPosts(userId) {
    console.log("Fetching posts...");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { postId: 1, content: "Hello World!" },
                { postId: 2, content: "Learning Async/Await" }
            ]);
        }, 2000);
    });
}

async function main() {
    try {
        const user = await fetchUser(101);
        console.log("User:", user);

        const posts = await fetchPosts(user.id);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
