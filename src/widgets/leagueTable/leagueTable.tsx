import { useState } from "react";
import TeamInput from "../teamInput/teamInput";
import TeamList from "../teamList/teamList";

//TODO: onclick funktion för klicka på ett lag som är med i listan och få upp en modal, med information om klubben.


const LeagueTable = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: "Arsenal", points: 0 },
    { id: 2, name: "AIK", points: 0 },
  ]);
  const [teamName, setTeamName] = useState("");
  const [teamPoints, setTeamPoints] = useState("");

  const addTeam = () => {
    if (teamName && teamPoints) {
      setTeams([
        ...teams,
        { id: Date.now(), name: teamName, points: Number(teamPoints) },
      ]);
      setTeamName("");
      setTeamPoints("");
    }
  };

  const removeTeam = (id: number) => {
    setTeams(teams.filter((team) => team.id !== id));
  };

  return (
    <div className="p-4 flex justify-center mt-5">
      <div className="w-1/2 bg-purple-900 p-6 rounded-lg shadow-lg shadow-blue-500/50">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Super League Table
        </h2>
        <TeamInput
          teamName={teamName}
          setTeamName={setTeamName}
          teamPoints={teamPoints}
          setTeamPoints={setTeamPoints}
          addTeam={addTeam}
        />
        <TeamList teams={teams} removeTeam={removeTeam} />
      </div>
    </div>
  );
};

export default LeagueTable;
