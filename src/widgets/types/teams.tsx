export interface Team {
  id: number;
  name: string;
  points: number;
  lastMatch: string;
  clubValue: string;
  location: string;
  stadium: {
    name: string;
    capacity: number;
  };
}
