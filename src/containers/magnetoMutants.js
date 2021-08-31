import React from 'react';
import { getMutantAnalysis } from "../Api/mutantValidation";
import { useEffect, useState } from "react";
import RenderInputDna from './renderInputDna';
import InputDna from '../components/inputDna/inputDna';
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import './magnetoMutants.css';

const MagnetoMutants = () => {
    const [dnaResult, setDnaResult] = useState({
        isValidDna: null,
        loading: false,
        message: "ingrese mutante",
    });
    const [dna, setDna] = useState();

    const setMutantDna = (value) => {
        setDnaResult((currentState) => ({
            ...currentState,
            isValidDna: false,
        }));
        setDna({ dna: value });
        console.log(dna);
    };

    const analyzeAgainHandler = () =>{
        setDnaResult((currentState) => ({
            ...currentState,
            isValidDna: null,
            message: "mutante invalido",
        }));
    };

    const checkPossibleMutant = async () => {
        setDnaResult((currentState) => ({
            ...currentState,
            loading: true,
        }));
        try {
            await getMutantAnalysis(dna)
            setDnaResult(currentState => ({
                        ...currentState,
                        isValidDna: true,
                        loading: false,
                        message: "mutante encontrado",
                    }));
        
            }
        catch(error){
                setDnaResult((currentState) => ({
                    ...currentState,
                    isValidDna: false,
                    loading: false,
                    message: "mutante invalido",
                }));
            };
    };

    useEffect(() => {
        if (dnaResult.isValidDna !== null) {
            console.log("hola");
            checkPossibleMutant();
        }
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
                    <div className="loader">
                        <CircularProgress color="secondary"/>
                    </div>
                ) : (
                    <RenderInputDna
                        validDna={dnaResult.isValidDna}
                        analyzeagain={analyzeAgainHandler}
                        setMutant={setMutantDna}
                    />
                )}
            </Grid>
        </div>
    );
};

export default MagnetoMutants;
