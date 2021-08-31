import React, {useContext} from "react";

import Card from "../UI/Card";
import { MutantsContext } from "../../context/mutants-context";
import "./FavoriteItem.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Stars from "./star";

const FavoriteItem = (props) => {
    

    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className="favorite-item">
                <h2>{props.name}</h2>
                <p>{props.superPower}</p>
                <div className="favorite-item-trashcan">
                    <Stars level={props.level}></Stars>
                    <IconButton
                        aria-label="delete"
                        className=""
                        onClick={() => props.remove(props.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default FavoriteItem;
