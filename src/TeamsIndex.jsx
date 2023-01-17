export function TeamsIndex(props) {
  return (
    <div>
      <h1>All Teams</h1>
      {props.teams.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <img src={team.logo} />
          <p>Location: {team.location}</p>
          <p>League: {team.league}</p>
          <button onClick={() => props.onShowTeam(team)}>More Info</button>
        </div>
      ))}
    </div>
  );
}