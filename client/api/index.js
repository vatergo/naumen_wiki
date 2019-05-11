import fetch from 'node-fetch';

export default {
    getAllRequests() {
        return fetch('http://127.0.0.1:8080/requests', { method: 'GET' }).then(data => data.json());
    },
    getRequest(name) {
        return fetch(`http://127.0.0.1:8080/requests/${name}`, { method: 'GET' }).then(data => data.json());
    }
}