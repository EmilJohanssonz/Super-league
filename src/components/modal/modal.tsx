import { Team } from "../../widgets/types/teams";
import {JSX} from 'react';

type ModalProps = {
  team: Team,
  onClose: () => void,
  setNewInfo: (e) => void,
  addInfo: () => void,
  value: string,
  extraInfo: false | JSX.Element | null
}

const Modal = ({team, onClose, setNewInfo, addInfo, value, extraInfo}: ModalProps) => {
  if (!team) return null;

  // const { extraInfo, newInfo, setNewInfo, addInfo, removeInfo } = useTeams();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[url('/cl.jpg')] bg-cover bg-center">
      <div className="bg-gradient-to-r from-[#193570] to-[#91269A] p-6 rounded-lg shadow-lg w-96 h-auto block ml-35 -mt-50">
        <h3 className="text-2xl font-bold mb-2 text-white">{team.name}</h3>
        <ul className="text-white">
          <li className="font-bold">Points: {team.points}</li>
          <li className="font-bold">Last Match: {team.lastMatch}</li>
          <li className="font-bold">Club Value: {team.clubValue}</li>
          <li className="font-bold">Location: {team.location}</li>
          <li className="font-bold">Stadium: {team.stadium.name}</li>
          <li className="font-bold">Capacity: {team.stadium.capacity}</li>
        </ul>
        <ul className="text-white overflow-y-scroll max-h-20 custom-scrollbar">{extraInfo}
        </ul>
        {/* Inputfält och knapp för att lägga till ny info */}
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={value}
            onChange={setNewInfo}
            placeholder="Add new info..."
            className="p-2 border rounded w-full text-white"
          />
          <button
            onClick={addInfo}
            className="px-3 py-2 bg-[#193570] text-white rounded"
          >
            Add
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;