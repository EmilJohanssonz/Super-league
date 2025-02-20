import { Team } from "./teams";
export interface TeamListProps {
  teams: Team[];
  removeTeam: (id: number) => void;
  setSelectedTeam: (team: Team) => void;
}