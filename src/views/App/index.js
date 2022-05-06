import react from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "../Layout";
import Decks from "../Decks";
import Cards from "../Cards";
import Study from "../Study";

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="decks" element={<Decks />} />
            {/* <Route index element={<Decks />} />
            <Route path="decks" element={<Decks />}>
              <Route path=":deckId" element={<Cards />} />
              <Route path=":deckId/study" element={<Study />} />
              {/* <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
}