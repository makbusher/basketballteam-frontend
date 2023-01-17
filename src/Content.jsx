import { TeamsIndex  } from "./TeamsIndex";

export function Content() {
  const teams = [
    {id:1, name: "Boston Celtics", location: "Boston", league: "NBA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydXcw5ZhTEClj4WLiRX5yDXajvZjll-l4IQ&usqp=CAU"}
  ];
  
  return (
    <div>
      <TeamsIndex teams={teams} />
    </div>
  );
}
