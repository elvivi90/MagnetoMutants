import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

const InputMutants = ({ setNewMutant }) => {
    const [NewMutantInput, setNewMutantInput] = useState({
        name: "",
        superPower: "",
        level: "low",
    });
    const [validName, setValidName] = useState({
        firstMutant: true,
        valid: true,
    });
    const [validSuperPower, setValidSuperPower] = useState({
        firstMutant: true,
        valid: true,
    });

    const submitHandler = () => {
    //     if (validName.valid & validSuperPower.valid & !validSuperPower.firstMutant) {
            setNewMutant(NewMutantInput);
        // } else {
        //     checkValidName();
        //     checkValidSuperPower();
        // }
        
    };

    const nameHandler = (event) => {
        event.persist();
        setNewMutantInput((currentStatus) => ({
            ...currentStatus,
            name: event.target.value,
        }));
        console.log(NewMutantInput);
    };

    const superPowerHandler = (event) => {
        event.persist();
        setNewMutantInput((currentStatus) => ({
            ...currentStatus,
            superPower: event.target.value,
        }));
    };

    const levelHandler = (event) => {
        event.persist();
        setNewMutantInput((currentStatus) => ({
            ...currentStatus,
            level: event.target.value,
        }));
    };
    const isValidsequence = (sequence) => {
        if (sequence === "") return false
        else return true;
    };
    const checkValidName = (event) => {
        event.persist();
        setValidName((curr) => ({
            ...curr,
            valid: isValidsequence(event.target.value),
        }));
        console.log(validName.validName);
        
    };
    const checkValidSuperPower = (event) => {
        event.persist();
        setValidSuperPower((curr) => ({
            ...curr,
            valid: isValidsequence(event.target.value),
        }));
        console.log(validName.validName);
    };
    return (
        <div>
            <label>Nombre del mutante*</label>
            <br />
            {validName.valid ? (
                <TextField
                    id="name"
                    variant="outlined"
                    placeholder="Nombre"
                    onChange={nameHandler}
                    onBlur={checkValidName}
                />
            ) : (
                <TextField
                    id="name"
                    error
                    variant="outlined"
                    placeholder="Nombre"
                    helperText="El campo nombre es obligatorio"
                    onChange={nameHandler}
                    onBlur={checkValidName}
                />
            )}
            <br />
            <label>Superpoder*</label>
            <br />
            {validSuperPower.valid ? (
                <TextField
                    id="superPower"
                    variant="outlined"
                    placeholder="Super poder"
                    onChange={superPowerHandler}
                    onBlur={checkValidSuperPower}
                />
            ) : (
                <TextField
                    id="superPower"
                    error
                    variant="outlined"
                    placeholder="Super poder"
                    helperText="El campo super poder es obligatorio"
                    onChange={superPowerHandler}
                    onBlur={checkValidSuperPower}
                />
            )}

            <br />
            <label>Nivel*</label>
            <br />
            <RadioGroup
                aria-label="gender"
                name="gender1"
                value={NewMutantInput.level}
                onChange={levelHandler}
            >
                <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Bajo"
                />
                <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="Medio"
                />
                <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="Alto"
                />
                <FormControlLabel
                    value="veryHigh"
                    control={<Radio />}
                    label="Muy alto"
                />
            </RadioGroup>
            <button onClick={submitHandler}>Enviar</button>
        </div>
    );
};

export default InputMutants;
