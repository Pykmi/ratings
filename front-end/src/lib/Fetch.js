const APIPath = "http://localhost:8080"

var APIHeaders = {
    "Accept": "appilication/json; charset=utf-8",
    "Content-Type": "application/json"
}



class APICall {
    constructor(path, headers) {
        this.path = path
        this.headers = headers

        this.request = new Request(path, headers: headers)
    }

    _fetch(r) {
        return fetch(r).then(function(res) {
            if(res.ok == false) {
                throw new Error(res.status + " " + res.statusText)
            }

            return res.json()
        }).catch(function(err) {
            console.error(err.message)
            throw err;
        });
    }

    _genPath(path) {
        return this.path + path
    }

    get(path, r) {
        return this._fetch(new Request(this._genPath(path), {
            method: "GET",
            headers: this.headers
        }))
        .then(res => {
            //console.log("Return inside APIFetch()")  // <-- DATA RETURNS FROM THE BACKEND
            return res;
        });
    }

    post(path, body = {}) {
        return this._fetch(new Request(this._genPath(path), {
            method: "POST",
            body: JSON.stringify(body),
            headers: this.headers
        })
    )}
}

export default function APIFetch(path = APIPath) {
    return new APICall(path, new Headers(APIHeaders))
}
