import React from 'react';
import { getMutantAnalysis } from "../Api/mutantValidation";
import { useEffect, useState } from "react";
import InputDna from '../components/inputDna/inputDna';
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone"
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const MagnetoMutants = () => {
    const [dnaResult, setDnaResult] = useState({
        isValidDna: false,
        loading: true,
        message: "ingrese mutante",
    });
    const [dna, setDna] = useState();

    const setMutantDna = (value) => {
        setDna({ dna: value });
        console.log(dna);
    };

    const analyzeAgainHandler = () =>{
        setDnaResult((currentState) => ({
            ...currentState,
            isValidDna: false,
            message: "mutante invalido",
        }));
    };

    const checkPossibleMutant = () => {
        setDnaResult((currentState) => ({
            ...currentState,
            loading: true,
        }));
        getMutantAnalysis(dna)
            .then((response) => {
                if (response === 200) {
                    setDnaResult((currentState) => ({
                        ...currentState,
                        isValidDna: true,
                        loading: false,
                        message: "mutante encontrado",
                    }));
                }
            })
            .catch((error) => {
                setDnaResult((currentState) => ({
                    ...currentState,
                    isValidDna: false,
                    loading: false,
                    message: "mutante invalido",
                }));
                console.log(error);
            });
    };

    useEffect(() => {
        checkPossibleMutant();
    }, [dna]);


    return (
        <div>
            <Grid
                container
                spacing={1}
                justifyContent="center"
                alignContent="center"
                alignItems="center"
            >
                {dnaResult.loading ? (
                    <CircularProgress />
                ) : dnaResult.isValidDna ? (
                    <div>
                            <CheckCircleTwoToneIcon
                                style={{ color: "green", fontSize: 30 }}
                            />
                            <h2>Mutante encontrado</h2>
                            <button onClick={analyzeAgainHandler}>
                                Volver a analizar
                            </button>
                    </div>
                ) : (
                    <InputDna setMutantDna={setMutantDna} />
                )}
            </Grid>
        </div>
    );
};

export default MagnetoMutants;
