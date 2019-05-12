import fetch from 'node-fetch';

const storage = {};
let history = {};

export function getAllRequests(token) {
    if (!history[token]) return [];
    let historyStorage = history[token].map(function (item, i) {
        return {
            caption: item,
            id: i,
            info: storage[item.toLowerCase()]
        };
    })
    return historyStorage;
}

export async function addRequest(name, token) {
    if (!history[token]) history[token] = [];
    history[token].push(name);
    name = name.toLowerCase();
    if (!storage[name]) {
        let ruEn = 'ru';
        if (name.charCodeAt(0) < 123 && name.charCodeAt(0) > 63) ruEn = 'en';
        const fetchedData = await fetch(encodeURI(`https://${ruEn}.wikipedia.org/w/api.php?action=opensearch&format=json&limit=1&search="${name}"`));
        const data = await fetchedData.json();
        if (data[2].length === 0)
            storage[name] = {
                caption: name,
                context: "Некорректный запрос",
                link: undefined
            };
        else if (name !== data[1][0].toLowerCase() || data[2][0].length === 0)
            storage[name] = {
                caption: data[1][0],
                context: data[2][0],
                link: data[3],
                redirected: true
            };
        else
            storage[name] = {
                caption: data[1][0],
                context: data[2][0],
                link: data[3]
            };
    }
    return storage[name];
}