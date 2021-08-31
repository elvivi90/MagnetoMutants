import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import './inputMutants.css';

const InputMutants = ({ setNewMutant }) => {
    const [NewMutantInput, setNewMutantInput] = useState({
        id: Date.now(),
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
        if (validName.valid & validSuperPower.valid & !validSuperPower.firstMutant) {
            let Newid = Date.now();
            setNewMutantInput((currentStatus) => ({
                ...currentStatus,
                id: NewMutantInput.id + 1,
            }));
            console.log(NewMutantInput.id);
            setNewMutant(NewMutantInput);
        }else {
            checkValidData();
        }
        
    };

    const checkValidData = () =>{
        const vName = isValidsequence(NewMutantInput.name)
        setValidName((curr) => ({
            ...curr,
            valid: vName,
        }));
        const vSuperPower = isValidsequence(NewMutantInput.superPower);
        setValidName((curr) => ({
            ...curr,
            valid: vSuperPower,
        }));
    }

    const nameHandler = (event) => {
        event.persist();
        setNewMutantInput((currentStatus) => ({
            ...currentStatus,
            name: event.target.value,
        }));
        setValidSuperPower((currentStatus) => ({
            ...currentStatus,
            firstMutant: false,
        }));
        console.log(NewMutantInput);
    };

    const superPowerHandler = (event) => {
        event.persist();
        setNewMutantInput((currentStatus) => ({
            ...currentStatus,
            superPower: event.target.value,
        }));
        setValidSuperPower((currentStatus) => ({
            ...currentStatus,
            firstMutant: false,
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
        <div className="input_new-mutant">
            <label>Nombre del mutante*</label>
            <br />
            <TextField
                id="name"
                error={!validName.valid}
                variant="outlined"
                placeholder="Nombre"
                helperText="El campo nombre es obligatorio"
                onChange={nameHandler}
                onBlur={checkValidName}
            />
            <br />
            <label>Superpoder*</label>
            <br />
                <TextField
                    id="superPower"
                    error={!validSuperPower.valid}
                    variant="outlined"
                    placeholder="Super poder"
                    helperText="El campo super poder es obligatorio"
                    onChange={superPowerHandler}
                    onBlur={checkValidSuperPower}
                />

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
