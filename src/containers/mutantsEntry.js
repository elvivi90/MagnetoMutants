import React, { useContext, useState } from "react";
import InputMutants from "../components/inputMutants/inputMutants";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import Grid from "@material-ui/core/Grid";
import { MutantsContext } from "../context/mutants-context";
import "./Products.css";

const MutantsEntry = (props) => {
    const [mutantList, setMutantList] = useContext(MutantsContext);
    const [newMutantAdded, setNewAddedMutant] = useState(false);

    const setMutant = (NewM) => {
        setMutantList((currentMutants) => [...currentMutants, NewM]);
        setNewAddedMutant(true);

    };

    const addNewMutantAgainHandler = () =>{
        setNewAddedMutant(false)
    };

    return (
        <div>
            {!newMutantAdded ? (
                <div>
                    <h2>Registrar nuevo mutante</h2>

                    <InputMutants setNewMutant={setMutant} />
                </div>
            ) : (
                <div>
                    <Grid
                        container
                        spacing={1}
                        justifyContent="center"
                        alignContent="center"
                        alignItems="center"
                    >
                        <CheckCircleTwoToneIcon
                            style={{ color: "green", fontSize: 30 }}
                        />
                        <h2>Mutante Agregado</h2>
                        <button onClick={addNewMutantAgainHandler}>
                            Agregar otro mutante
                        </button>
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default MutantsEntry;