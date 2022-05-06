import axios from "axios";

// import cards from "./cards";
// import decks from "./decks";
import UsersAPI from "./users";

const host = "http://localhost:3003";

export default {
    // cards,
    // decks,
    UsersAPI: UsersAPI(axios, host)
}