export function TeamsShow(props) {
  return (
    <div>
      <h1>Team Information</h1>
      <p>Name: {props.team.name}</p>
      <p>Location: {props.team.location}</p>
      <p>League: {props.team.league}</p>
      <form>
        <div>
          Name: <input defaultValue={props.team.name} name="name" type="text" />
          Location: <input defaultValue={props.team.location} name="location" type="text" />
          League: <input defaultValue={props.team.league} name="league" type="text" />
          Logo: <input defaultValue={props.team.logo} name="logo" type="text" />
        </div>
        <button type="submit">Update Team</button>
      </form>
    </div>
  );
}