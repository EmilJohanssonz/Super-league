import React from "react";
import TeamItem from "../teamItems/teamItems";
import { TeamListProps } from "../types/teamList";

const TeamList: React.FC<TeamListProps> = ({
  teams,
  removeTeam,
  setSelectedTeam,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-md">
      {teams.map((team) => (
        <TeamItem
          key={team.id}
          team={team}
          removeTeam={removeTeam}
          setSelectedTeam={setSelectedTeam}
        />
      ))}
    </div>
  );
};

export default TeamList;