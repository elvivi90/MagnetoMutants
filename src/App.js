import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import MagnetoMutants from "./containers/magnetoMutants";
import MutantsEntry from "./containers/mutantsEntry";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <main>
                <Route path="/" component={MagnetoMutants} exact />
                <Route path="/Cargar mutantes" component={MutantsEntry} />
                <Route path="/Mis Mutantes" component={FavoritesPage} />
            </main>
        </React.Fragment>
    );
};

export default App;
