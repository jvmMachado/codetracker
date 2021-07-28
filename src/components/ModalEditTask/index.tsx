import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { TTask } from '../../types';

interface ModalEditTaskProps {
  isOpen: boolean;
  editingTask?: TTask;
  setIsOpen: () => void;
  handleUpdateTask: (data: TTask) => void;
}

const ModalEditTask = (props: ModalEditTaskProps) => {

  async function handleSubmit(data: TTask) {
    const { setIsOpen, handleUpdateTask } = props;

    handleUpdateTask(data);
    setIsOpen();
  };


  const { isOpen, setIsOpen, editingTask } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingTask}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui"  />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditTask;
