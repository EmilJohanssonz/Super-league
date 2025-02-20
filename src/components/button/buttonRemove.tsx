interface ButtonRemoveProps {
  onClick: () => void;
}

const ButtonRemove: React.FC<ButtonRemoveProps> = ({ onClick }) => {
  return (
    <button
      className=" px-2 py-1 text-red-600 hover:text-red-800"
      onClick={onClick}
    >
      Remove
    </button>
  );
};

export default ButtonRemove;
