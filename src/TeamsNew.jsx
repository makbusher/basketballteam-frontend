export function TeamsNew() {
  return (
    <div>
      <h1>New Team</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          League: <input name="league" type="text" />
        </div>
        <div>
          Logo: <input name="logo" type="text" />
        </div>
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}