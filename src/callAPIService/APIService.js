import userActivity from "./datas/userActivity"
import userAverageSessions from "./datas/userAverageSessions"
import userMainData from "./datas/userMainData"
import userPerformance from "./datas/userPerformance"


class APIService {

    /**
     * Fetch the user main datas from the API
     * @param {string} userId        user ID
     * @param {function} userData    function which updates the state when the data is recovered
     */
    getUserData = (userId, userData) => {
        console.log('test')
        fetch(`http://localhost:3000/user/${userId}`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userMainData(result.data)
                userData(user)
            })
    }


    /**
     * Fetch the user average sessions from the API
     * @param {string} userId               user ID
     * @param {function} AverageSessions    function which updates the state when the data is recovered
     */
    getUserAverageSessions = (userId, AverageSessions) => {

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userAverageSessions(result.data)
                AverageSessions(user)
            })

    }


    /**
     * Fetch the user performance from the API
     * @param {string} userId                     user ID
     * @param {function} userPerformanceData      function which updates the state when the data is recovered
     */
    getUserPerformance = (userId, userPerformanceData) => {

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userPerformance(result.data)
                userPerformanceData(user)
            })

    }


    /**
     * Fetch the user activity from the API
     * @param {string} userId                     user ID
     * @param {function} userActivityData         function which updates the state when the data is recovered
     */
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