import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { MutantsContext } from "../../context/mutants-context";

import "./Navigation.css";

const Navigation = (props) => {
    const [mutantList, setMutantList] = useContext(MutantsContext);
    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Detector de Mutantes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/cargar-mutantes">Cargar mutantes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mis-mutantes">Mis Mutantes ({mutantList.length})</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
