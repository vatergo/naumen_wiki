import fetch from 'node-fetch';

export default {
    getAllRequests(token) {
        let headers = new Headers({
            "X-Token": token
        });
        return fetch('http://127.0.0.1:8080/requests', { method: 'GET', headers: headers }).then(data => data.json());
    },
    getRequest(name, token) {
        let headers = new Headers({
            "X-Token": token
        });
        return fetch(`http://127.0.0.1:8080/requests/${name}`, { method: 'GET', headers: headers }).then(data => data.json());
    }
}