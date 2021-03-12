import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
const {idTeam,strTeam,strTeamBadge} = props.team;
const history = useHistory();
const handleClick = (teamId) => {
    history.push(`/team/${teamId}`);
}

return (
        <div className="mainStyle">
        <div className="teamStyle" >
            <img src={strTeamBadge} alt="" srcset=""/>
            <h2>{strTeam} </h2>                                 
            <button onClick= { () => handleClick(idTeam)} className= "main-btn" >
               See Details <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            </button>
        </div>
        </div>
    );
};

export default Team;