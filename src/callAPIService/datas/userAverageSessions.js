
class userAverageSessions {

    constructor(data) {

        this.userId = data.userId
        this.line = data.sessions
        this.day = data.sessions.day
        this.sessionLength = data.sessions.sessionLength
    }
}

export default userAverageSessions