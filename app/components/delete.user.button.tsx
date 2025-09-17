import React from "react";
import axios from "axios";

interface DeleteUserButtonProps {
  userId: string;
  onUserDeleted: () => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onUserDeleted }) => {
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation(); // evita que dispare el onClick de la fila
    
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este usuario?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      onUserDeleted(); // refresca lista después de borrar
    } catch (err) {
      console.error("Error eliminando usuario:", err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold
                 hover:bg-red-700 transition-colors duration-300"
    >
      Eliminar
    </button>
  );
};

export default DeleteUserButton;
