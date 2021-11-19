

/**
* @param {object} data - user performance datas récupérés
*/
class userPerformance {
    constructor(data) {
        this.kind = data.kind;
        this.datas = data.data;
    }
}

export default userPerformance