export default class Api {
    static get(route) {
        return fetch(route).then(res => res.json());
    }
}
