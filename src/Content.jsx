import axios from "axios";
import { useState, useEffect } from "react";
import { TeamsIndex  } from "./TeamsIndex";
import { TeamsNew } from "./TeamsNew";

export function Content() {
  const [teams, setTeams] = useState([]);

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
      setTeams([...teams, response.data]);
      successCallback();
    });
  };

  useEffect(handleTeamsIndex, []);

  return (
    <div>
      <TeamsNew onCreateTeam={handleCreateTeam} />
      <br/>
      <hr/>
      <TeamsIndex teams={teams} />
    </div>
  );
}
