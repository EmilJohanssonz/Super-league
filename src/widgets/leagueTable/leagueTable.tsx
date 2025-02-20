import TeamInput from "../teamInput/teamInput";
import { Team } from "../types/teams";
import Modal from "../../components/modal/modal";
import TeamList from "../teamList/teamList";
import { useState } from "react";
import { useTeams } from "../../hook/useTeams";

const LeagueTable = () => {
  const { teams, setTeams } = useTeams(); 

  // states för input & modal
  const [teamName, setTeamName] = useState("");
  const [teamPoints, setTeamPoints] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const addTeam = () => {
    if (teamName && teamPoints) {
      setTeams([
        ...teams,
        {
          id: Date.now(),
          name: teamName,
          points: Number(teamPoints),
          lastMatch: "",
          clubValue: "",
          location: "",
          stadium: { name: "", capacity: 0 },
        },
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
        <TeamList
          teams={teams}
          removeTeam={removeTeam}
          setSelectedTeam={setSelectedTeam}
        />
      </div>
      {selectedTeam && (
        <Modal team={selectedTeam} onClose={() => setSelectedTeam(null)} />
      )}
    </div>
  );
};

export default LeagueTable;
