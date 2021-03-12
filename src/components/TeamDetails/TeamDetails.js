import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]));
    }, [teamId])
    return (
        <div>
            <div>
            <img className="detailsimg1" src={teams.strTeamBadge} alt="" srcset=""/>
            </div>
            
            <div className="container">
               <div className="divImage">
                                
                <img className="detailsimg2" src={teams.strTeamFanart2} alt="" srcset=""/>               
                
                </div>
               <div>
                   
               <h1>{teams.strTeam}</h1>
                <h3>Founded : {teams.intFormedYear}.</h3>
                <h4>Stadium : {teams.strStadium}. </h4>
                <h5>Team Gender : {teams.strGender}.</h5>
                      
               </div>
                
            </div>
                                              
        <div className="detailParagraph">
               <p>{teams.strDescriptionEN}</p>
        </div>
            
 
        </div>
    );
};

export default TeamDetails;