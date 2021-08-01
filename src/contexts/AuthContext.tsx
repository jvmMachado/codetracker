import { createContext, useState, ReactNode } from 'react';

export { AuthContext, AuthContextProvider };

type AuthContextType = {
  modalOpen: boolean;
  toggleModal: () => void;
  editModalOpen: boolean;
  toggleEditModal: () => void;
};

const AuthContext = createContext({} as AuthContextType);

//

type AuthProviderProps = {
  children: ReactNode;
};

function AuthContextProvider({ children }: AuthProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((e) => !e);
  };

  const toggleEditModal = () => {
    setEditModalOpen((e) => !e);
  };

  return (
    <AuthContext.Provider
      value={{ modalOpen, editModalOpen, toggleModal, toggleEditModal }}
    >
      {children}
    </AuthContext.Provider>
  );
}
