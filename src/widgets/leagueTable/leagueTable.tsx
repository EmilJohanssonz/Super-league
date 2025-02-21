import TeamInput from "../teamInput/teamInput";
import { Team } from "../types/teams";
import Modal from "../../components/modal/modal";
import TeamList from "../teamList/teamList";
import {JSX, useState} from 'react';

const LeagueTable = () => {

  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "Arsenal",
      points: 0,
      lastMatch: "Won 5-1 vs Man City",
      clubValue: "€1.2B",
      location: "London, England",
      stadium: { name: "Emirates Stadium", capacity: 60704 },
    },
  {
    id: 2,
    name: "AIK",
    points: 0,
    lastMatch: "Won 2-0 vs Göteborg",
    clubValue: "€50M",
    location: "Stockholm, Sweden",
    stadium: { name: "Friends Arena", capacity: 50000 },
  },
  ]);

  const [extraInfo, setExtraInfo] = useState<{ [teamId: number]: string[] }>({});
  const [newInfo, setNewInfo] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamPoints, setTeamPoints] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const addInfo = () => {
    if (newInfo.trim() !== "" && selectedTeam) {
      setExtraInfo((prev) => ({
        ...prev,
        [selectedTeam.id]: [...(prev[selectedTeam.id] || []), newInfo],
      }));
      setNewInfo("");
    }
  };

  const onChange = (e) => setNewInfo(e.target.value)

  const removeInfo = (index: number) => {
    if (selectedTeam) {
      setExtraInfo((prev) => ({
        ...prev,
        [selectedTeam.id]: prev[selectedTeam.id].filter((_, i) => i !== index),
      }));
    }
  };


  {/* Lista med extra information */}
  const renderExtraInfo: false | JSX.Element | null = selectedTeam && extraInfo[selectedTeam.id]?.length > 0 && (
    <ul className="text-white overflow-y-scroll max-h-20 custom-scrollbar">
      {extraInfo[selectedTeam.id].map((item, index) => (
        <li key={index} className="font-bold">
          {item}
          <button
            onClick={() => removeInfo(index)}
            className="ml-2 px-2 py-1 text-orange-600 hover:text-orange-800"
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );


  // Input lägga till

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
        <Modal team={selectedTeam} extraInfo={renderExtraInfo} value={newInfo} setNewInfo={onChange} addInfo={addInfo} onClose={() => setSelectedTeam(null)}/>
      )}
    </div>
  );
};

export default LeagueTable;