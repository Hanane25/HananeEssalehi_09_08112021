
class userMainData {

    constructor(data) {

        this.name = data.userInfos.firstName
        this.todayScore = data.todayScore
        this.calorieCount = data.keyData.calorieCount
        this.proteinCount = data.keyData.proteinCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount
    }

}

export default userMainData



























// class userMainData {
//     //créer et initialiser un objet
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }


// console.log(new userMainData())

// class userKeyData {
//     constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount) {
//         this.calorieCount = calorieCount;
//         this.proteinCount = proteinCount;
//         this.carbohydrateCount = carbohydrateCount;
//         this.lipidCount = lipidCount;
//     }
// }

// console.log(new userKeyData())

// class test {

//     getUserDetails(fetchedData) {
//         const { id, userInfos, todayScore, score, keyData } = fetchedData;

//         const { firstName, lastName, age } = userInfos;
//         const {
//             calorieCount,
//             proteinCount,
//             carbohydrateCount,
//             lipidCount,
//         } = keyData;

//         const userObj = new userMainData(firstName, lastName, age)
//         const keyDataObj = new userKeyData(calorieCount,
//             proteinCount,
//             carbohydrateCount,
//             lipidCount)

//         console.log(userObj)

//         const userDataObj = new userData(id, todayScore || score, userObj, keyDataObj)


//         return userDataObj

//     };



// }

// console.log(new test())





