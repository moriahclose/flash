import axios from "axios";

export default function UsersAPI(axios, host) {
    host += '/users';

    return {
        create: () => {
            try {
                return axios.post(`${host}`);
            } catch(error) {
                return `Failed to create user: ${error}`;
            }
        },
        get: (id) => {
            try {
                return axios.get(`${host}/${id}`);
            } catch(error) {
                return `Failed to get user ${id}: ${error}`;
            }
        },
        getDecks: (id) => {
            try {
                return axios.get(`${host}/${id}/decks`);
            } catch(error) {
                return `Failed to get decks for user ${id}: ${error}`;
            }
        }
    }
}