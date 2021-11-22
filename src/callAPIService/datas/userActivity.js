
/**
* @param {object} data - user activity datas récupérés (day/kilogram/calories)
*/
class userActivity {
    constructor(data) {
        this.session = data.sessions
    }
}

export default userActivity