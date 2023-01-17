import axios from "axios";
import { useState, useEffect } from "react";
import { TeamsIndex  } from "./TeamsIndex";
import { TeamsNew } from "./TeamsNew";
import { Modal } from "./Modal";
import { TeamsShow } from "./TeamsShow";

export function Content() {
  const [teams, setTeams] = useState([]);
  const [isTeamsShowVisible, setIsTeamsShowVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState({});

  const handleTeamsIndex = () => {
    console.log("handleTeamsIndex");
    axios.get("http://localhost:3000/teams.json").then((response) => {
      console.log(response.data);
      setTeams(response.data);
    });
  };

  const handleCreateTeam = (params, successCallback) => {
    console.log("handleCreateTeam", params);
    axios.post("http://localhost:3000/teams.json", params).then((response) =>{
      setTeams([...teams, response.data]); //resets team array (...teams is old, response.data is new)
      successCallback();
    });
  };

  const handleShowTeam = (team) => {
    console.log("handleShowTeam", team);
    setIsTeamsShowVisible(true);
    setCurrentTeam(team);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTeamsShowVisible(false);
  };

  useEffect(handleTeamsIndex, []);

  return (
    <div>
      <TeamsNew onCreateTeam={handleCreateTeam} />
      <br/>
      <hr/>
      <TeamsIndex teams={teams} onShowTeam={handleShowTeam} />
      <Modal show={isTeamsShowVisible} onClose={handleClose}>
        <TeamsShow team={currentTeam} />
      </Modal>
    </div>
  );
}
