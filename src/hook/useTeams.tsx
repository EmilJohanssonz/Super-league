import { useState } from "react";
import { Team } from "../widgets/types/teams";

export const useTeams = () => {
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
  const [extraInfo, setExtraInfo] = useState<string[]>([]);
  const [newInfo, setNewInfo] = useState("");

  const addInfo = () => {
    if (newInfo.trim() !== "") {
      setExtraInfo([...extraInfo, newInfo]);
      setNewInfo("");
    }
  };

  const removeInfo = (index: number) => {
    setExtraInfo(extraInfo.filter((_, i) => i !== index));
  };

  return {
    teams,
    setTeams,
    extraInfo,
    newInfo,
    setNewInfo,
    addInfo,
    removeInfo,
  };
};
