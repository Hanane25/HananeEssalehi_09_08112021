import userAverageSessions from "../datas/userAverageSessions"
import userMainData from "../datas/userMainData"


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

}

export default APIService