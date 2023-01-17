export function TeamsShow(props) {
  return (
    <div>
      <h1>Team Information</h1>
      <p>Name: {props.team.name}</p>
      <p>Location: {props.team.location}</p>
      <p>League: {props.team.league}</p>
      <p>Logo: {props.team.logo}</p>
    </div>
  );
}