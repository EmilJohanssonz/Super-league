import React from "react";
import { Team } from "../teamList/teamList";

interface TeamItemProps {
  team: Team;
  removeTeam: (id: number) => void;
}


const TeamItem: React.FC<TeamItemProps> = ({ team, removeTeam }) => {
  return (
    <div className="flex justify-between items-center p-3 border-b last:border-b-0">
      <span className="font-medium">
        {team.name} - {team.points} pts
      </span>
      <button
        onClick={() => removeTeam(team.id)}
        className="px-2 py-1 text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </div>
  );
};

export default TeamItem;
