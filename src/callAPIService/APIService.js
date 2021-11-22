import userActivity from "./datas/userActivity"
import userAverageSessions from "./datas/userAverageSessions"
import userMainData from "./datas/userMainData"
import userPerformance from "./datas/userPerformance"


class APIService {

    /**
     * Fetch the user main datas from the API
     * @param {string} userId        user ID
     * @param {function} userData    function which updates the state when the data is recovered
     * @param {function} catching    function for error
     */
    getUserData = (userId, userData, catching) => {
        console.log('test')
        fetch(`http://localhost:3000/user/${userId}`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userMainData(result.data)
                userData(user)
            })
            .catch((error) => {
                console.log("Erreur", error);
                catching();
            })
    }


    /**
     * Fetch the user average sessions from the API
     * @param {string} userId               user ID
     * @param {function} AverageSessions    function which updates the state when the data is recovered
     * @param {function} catching           function for error
     */
    getUserAverageSessions = (userId, AverageSessions, catching) => {

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userAverageSessions(result.data)
                AverageSessions(user)
            })
            .catch((error) => {
                console.log("Erreur:", error);
                catching();
            })

    }


    /**
     * Fetch the user performance from the API
     * @param {string} userId                     user ID
     * @param {function} userPerformanceData      function which updates the state when the data is recovered
     * @param {function} catching                 function for error
     */
    getUserPerformance = (userId, userPerformanceData, catching) => {

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userPerformance(result.data)
                userPerformanceData(user)
            })
            .catch((error) => {
                console.log("Erreur:", error);
                catching();
            })

    }


    /**
     * Fetch the user activity from the API
     * @param {string} userId                     user ID
     * @param {function} userActivityData         function which updates the state when the data is recovered
     * @param {function} catching                 function for error
     */
    getUserActivity = (userId, userActivityData, catching) => {

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then((response) => response.json())
            .then((result) => {
                const user = new userActivity(result.data)
                userActivityData(user)
            })
            .catch((error) => {
                console.log("Erreur:", error);
                catching();
            })
    }
}

export default APIService