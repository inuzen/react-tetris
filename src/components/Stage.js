import React from 'react';
import Cell from './Cell';
import {StyledStage} from './styles/StyledStage'
const Stage = ({ stage }) => {
    return <StyledStage width={stage[0].length} height={stage.length}>
        {
            stage.map((row, y) => row.map((cell, x) => <Cell key={`${x}-${y}`} type={cell[0]} />))
        }
        </StyledStage>;
};

export default Stage;
