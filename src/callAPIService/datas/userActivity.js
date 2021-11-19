
/**
* @param {object} data - user activity datas récupérés
*/
class userActivity {
    constructor(data) {
        this.session = data.sessions
        this.day = data.sessions.day
        this.kilogram = data.sessions.kilogram
        this.calories = data.sessions.calories
    }
}

export default userActivity