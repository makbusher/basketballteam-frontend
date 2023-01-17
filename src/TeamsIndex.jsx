export function TeamsIndex(props) {
  return (
    <div>
      <h1>All Teams</h1>
      {props.teams.map((team) => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <img src={team.logo} />
          <button onClick={() => props.onShowTeam(team)}>More Info</button>
        </div>
      ))}
    </div>
  );
}