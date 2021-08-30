import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

const InputDna = ({ setMutantDna }) => {
    const [dnaFirstSequence, setdnaFirstSequence] = useState();
    const [dnaSecondSequence, setdnaSecondSequence] = useState();
    const [dnaThirdSequence, setdnaThirdSequence] = useState();
    const [dnaForthSequence, setdnaForthSequence] = useState();
    const [dnaFifthSequence, setdnaFifthSequence] = useState();
    const [dnaSixthSequence, setdnaSixthSequence] = useState();
    const [valid, setValid] = useState(true);

    const dnaArray = [];
    const regex = new RegExp(/([ATCG]{6})/gi)

    const isValidsequence = (sequence) =>{
        return /([ATCG]{6})/gi.test(sequence);
    }

    const submitHandler = () => {
        dnaArray.push(
            dnaFirstSequence,
            dnaSecondSequence,
            dnaThirdSequence,
            dnaForthSequence,
            dnaFifthSequence,
            dnaSixthSequence
        );
        console.log(dnaArray);
        setMutantDna(dnaArray);
    };

    const setpossibleDnaHandlerFirst = (event) => {
        setValid((event.target.value));
        console.log(valid);

        setdnaFirstSequence(event.target.value);
    };
    const setpossibleDnaHandlerSecond = (event) => {
        setdnaSecondSequence(event.target.value);
    };
    const setpossibleDnaHandlerThird = (event) => {
        setdnaThirdSequence(event.target.value);
    };
    const setpossibleDnaHandlerForth = (event) => {
        setdnaForthSequence(event.target.value);
    };
    const setpossibleDnaHandlerFifth = (event) => {
        setdnaFifthSequence(event.target.value);
    };
    const setpossibleDnaHandlerSixth = (event) => {
        setdnaSixthSequence(event.target.value);
    };

    const check= (event) =>{
        setValid(isValidsequence(event.target.value));
    }

    return (
        <div>
            <Grid container spacing={1} justifyContent="center">
                <h1>Ingresá la secuencia de ADN</h1>
                <Grid container spacing={1} justifyContent="center">
                    {valid ? (
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="ATGCGA"
                            inputProps={{ maxLength: 6 }}
                            onChange={setpossibleDnaHandlerFirst}
                            onBlur={check}
                        />
                    ) : (
                        <TextField
                            error
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="ATGCGA"
                            helperText="the sequence has to be 6 digits. Only with letters A, T, C or G"
                            onChange={setpossibleDnaHandlerFirst}
                        />
                    )}
                    -
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="CAGTGC"
                        onChange={setpossibleDnaHandlerSecond}
                        onBlur={check}
                    />
                    -
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="TTATGT"
                        onChange={setpossibleDnaHandlerThird}
                    />
                    -
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="AGAAGG"
                        onChange={setpossibleDnaHandlerForth}
                    />
                    -
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="CCCCTA"
                        onChange={setpossibleDnaHandlerFifth}
                    />
                    -
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="TCACTG"
                        onChange={setpossibleDnaHandlerSixth}
                    />
                </Grid>

                <button onClick={submitHandler}>submitir</button>
            </Grid>
        </div>
    );
};

export default InputDna;
