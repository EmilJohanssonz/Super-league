import React from "react";
import Button from "../../components/button/button";

interface TeamInputProps {
  teamName: string;
  setTeamName: (name: string) => void;
  teamPoints: string;
  setTeamPoints: (points: string) => void;
  addTeam: () => void;
}

const TeamInput: React.FC<TeamInputProps> = ({
  teamName,
  setTeamName,
  teamPoints,
  setTeamPoints,
  addTeam,
}) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="p-2 border border-white rounded w-full placeholder:text-blue-950 text-white"
      />
      <input
        type="number"
        placeholder="Points"
        min={0}
        max={0}
        value={teamPoints}
        onChange={(e) => setTeamPoints(e.target.value)}
        className="p-2 border border-white rounded w-1/3 placeholder:text-blue-950 text-white"
      />
      <Button addTeam={addTeam} />
    </div>
  );
};

export default TeamInput;
