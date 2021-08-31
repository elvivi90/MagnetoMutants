import React from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';


const Stars = ({level}) => {
    
    if (level === "low") 
        return <StarOutlineIcon color="secondary" />;
    
    if (level === "medium") 
        return (
            <div>
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
            </div>
        );
    
    if (level === "high") 
        return (
            <div>
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
            </div>
        );
    
    if (level === "veryHigh") 
        return (
            <div>
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
                <StarOutlineIcon color="secondary" />
            </div>
        );
    

};

export default Stars;