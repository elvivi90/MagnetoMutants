import React, {useContext} from "react";

import Card from "../UI/Card";
import { MutantsContext } from "../../context/mutants-context";
import "./FavoriteItem.css";

const FavoriteItem = (props) => {
    const [mutantList, setMutantList] = useContext(MutantsContext);
    

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="favorite-item">
                <h2>{props.name}</h2>
                <p>{props.superPower}</p>
                <button onClick={()=>props.remove(props.id)}></button>
            </div>
        </Card>
    );
};

export default FavoriteItem;
