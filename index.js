console.log("i'm loading")

let nameList = [
    "john", "Susan", "Mauro", "Igor", "Peter", "Lukas"
]

let student = {
    name: "John",
    age: 20,
    email: "john@gmail.com",
    votes: [30, 27, 30, 20, 18],
    createUsername: () => {
        console.log(this.name)
    }
}


// [ 1, 3, 2, 5, 4]
// [ 1, 2, 3, 4, 5]

// [ 10, 3, 2 , 5]
// [ 3, 2, 5, 10 ]
// [ 2, 3, 5, 10 ]

function bubbleSort(myArray) {
    let anySwapOccurred  = false;

    do {
        anySwapOccurred  = false;
        for(let i = 0; i < myArray.length -1; i ++){ // go through all the array!
            if (myArray[i] < myArray[i + 1]) { // if i'm bigger than the next one!
                //swap elements
                let temp = myArray[i]
                myArray[i] = myArray[i +1]
                myArray[i+1] = temp
                anySwapOccurred  = true;
            }
        }
        console.log(myArray)
    } while (anySwapOccurred)
}

function printName() {
    for (let i = 0; i < nameList.length; i++){
        console.log("In position number " + i + " --> " + nameList[i])
    }
}

function helloWorld(name, email) {

    // > greater than
    // < lower than
    if (email !== undefined) {
        console.log("helloWorld is working")
        console.log(name, email)
        return email + " --> " + name
    }
    else {
        console.log("This is my name: " + name)
        return "This is my name: " + name
    }
}

function loopUntil(numberOfTimes) {
    while (numberOfTimes > 0) {
        console.log("The new value is: " + numberOfTimes)
        numberOfTimes--; // decrease value by 1. numberOfValues = numberOfValues - 1;
    }
    console.log("END")
}

function doLoopUntil(numberOfTimes) {
    do {
        console.log("The new value is: " + numberOfTimes)
        numberOfTimes--; // decrease value by 1. numberOfValues = numberOfValues - 1;
    } while (numberOfTimes > 0)

    console.log("END")
}