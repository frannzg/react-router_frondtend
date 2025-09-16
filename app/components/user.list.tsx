import React, { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../../app/components/use.create.modal";
import UserEditModal from "../../app/components/use.edit.modal"; 
import CreateIcon from "../../public/plus.svg";

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  birthdate: string;
  isActive: boolean;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="text-center mb-8">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-md font-bold text-sm
          hover:bg-green-700 transition-colors duration-300 ease-in-out
          inline-flex items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <img 
            src={CreateIcon} 
            alt="create icon" 
            className="w-5 h-5"
          />
          CREAR USUARIO
        </button>
      </div>

      <div className="flex justify-center">
        <table className="w-full max-w-4xl border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3 text-left">NOMBRE</th>
              <th className="px-6 py-3 text-left">EMAIL</th>
              <th className="px-6 py-3 text-left">CONTRASEÑA</th>
              <th className="px-6 py-3 text-left">EDAD</th>
              <th className="px-6 py-3 text-left">FECHA DE NACIMIENTO</th>
              <th className="px-6 py-3 text-center">ACTIVO</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                onClick={() => setSelectedUser(user)}
                className="hover:bg-green-50 cursor-pointer border-b border-gray-200 bg-green-100"
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">
                  {new Date(user.birthdate).toISOString().split("T")[0]}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full
                    ${user.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {user.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Crear */}
      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onUserCreated={fetchUsers}
        />
      )}

      {/* Modal Editar */}
      {selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onUserUpdated={fetchUsers}
        />
      )}
    </div>
  );
};

export default UserList;
