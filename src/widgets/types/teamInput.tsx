import React from "react";

export interface TeamInputProps {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  teamPoints: string;
  setTeamPoints: React.Dispatch<React.SetStateAction<string>>;
  addTeam: () => void;
}
