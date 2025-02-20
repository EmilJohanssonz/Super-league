import React from "react";
import { Team } from "../types/teams";

interface TeamItemProps {
  team: Team;
  removeTeam: (id: number) => void;
  setSelectedTeam: (team: Team) => void;
}

const TeamItem: React.FC<TeamItemProps> = ({
  team,
  removeTeam,
  setSelectedTeam,
}) => {
  return (
    <div
      className="flex justify-between items-center p-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-200"
      onClick={() => setSelectedTeam(team)}
    >
      <span className="font-medium">
        {team.name} - {team.points} pts
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Stop click from opening the modal when clicking "Remove"
          removeTeam(team.id);
        }}
        className="px-2 py-1 text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </div>
  );
};

export default TeamItem;
