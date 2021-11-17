import userActivity from "./datas/userActivity"
import userAverageSessions from "./datas/userAverageSessions"
import userMainData from "./datas/userMainData"
import userPerformance from "./datas/userPerformance"


class APIService {

    getUserData = (userId, userData) => {
        console.log('test')
        fetch(`http://localhost:3000/user/${userId}`) // Call the fetch function passing the url of the API as a parameter
            //return response sous forme d'objet json()
            .then((response) => { return response.json() }) // code for handling the data I get from the API
            .then((result) => {
                console.log(result)
                //new class of userMainData est créée 
                const user = new userMainData(result.data)
                //return Function which updates the state when the data is recovered
                userData(user)
            })

    }

    getUserAverageSessions = (userId, AverageSessions) => {

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                const user = new userAverageSessions(result.data)
                AverageSessions(user)
            })
    }

    getUserPerformance = (userId, userPerformanceData) => {

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userPerformance(result.data)
                userPerformanceData(user)

            })
    }

    getUserActivity = (userId, userActivityData) => {

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userActivity(result.data)
                userActivityData(user)

            })
    }

}

export default APIService