import React from "react";

interface ButtonProps {
  addTeam: () => void;
}

const Button: React.FC<ButtonProps> = ({addTeam}) => {
  return (
    <button onClick={addTeam} className="px-4 py-2 bg-orange-600 text-white rounded cursor-pointer">
      Add
      </button>
  )
}

export default Button








