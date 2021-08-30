import axios from "axios";

export const getMutantAnalysis = async (dna) => {

    console.log(dna);

    const { status, data: response } = await axios.post(
        "http://midas-mutantdna.herokuapp.com/mutant/",
        dna
    );

    if (status !== 200) {
        console.log(status);
        console.warn("ERROR_VALIDATION ", response.errors);
        throw new Error(`An error occured`);
    }
    if (status === 200) {
        console.log(status);
    }
    return status;
};
