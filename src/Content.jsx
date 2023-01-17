import axios from "axios";
import { useState, useEffect } from "react";
import { TeamsIndex  } from "./TeamsIndex";

export function Content() {
  const [teams, setTeams] = useState([]);

  const handleTeamsIndex = () => {
    console.log("handleTeamsIndex");
    axios.get("http://localhost:3000/teams.json").then((response) => {
      console.log(response.data);
      setTeams(response.data);
    });
  };

  useEffect(handleTeamsIndex, []);

  return (
    <div>
      <TeamsIndex teams={teams} />
    </div>
  );
}
