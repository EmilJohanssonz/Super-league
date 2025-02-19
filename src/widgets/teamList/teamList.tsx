import TeamItem from "../teamItems/teamItems";

export interface Team {
  id: number;
  name: string;
  points: number;
}

export interface TeamListProps {
  teams: Team[];
  removeTeam: (id: number) => void;
}

const TeamList: React.FC<TeamListProps> = ({ teams, removeTeam }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-md">
      {teams.map((team) => (
        <TeamItem key={team.id} team={team} removeTeam={removeTeam} />
      ))}
    </div>
  );
};

export default TeamList;
