import React from 'react';
import InputDna from '../components/inputDna/inputDna';
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";



const RenderInputDna = ({ validDna, analyzeagain, setMutant }) => {
    return validDna ? (
        <div>
            <CheckCircleTwoToneIcon style={{ color: "green", fontSize: 30 }} />
            <h2>Mutante encontrado</h2>
            <button onClick={analyzeagain}>Volver a analizar</button>
        </div>
    ) : validDna === null ? (
        <div>
            <InputDna setMutantDna={setMutant} />
        </div>
    ) : (
        <div>
            <CheckCircleTwoToneIcon style={{ color: "green", fontSize: 30 }} />
            <h2>ADN no mutante</h2>
            <button onClick={analyzeagain}>Volver a analizar</button>
        </div>
    ); 
        
};

export default RenderInputDna;