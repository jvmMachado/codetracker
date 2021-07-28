import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { TTask } from '../../types';

interface ModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTask: (data: TTask) => void;
}

const ModalAddTask = (props: ModalAddTaskProps) => {

  async function handleSubmit(data: TTask) {
    const { setIsOpen, handleAddTask } = props;

    handleAddTask(data);
    setIsOpen();
  };

    const { isOpen, setIsOpen } = props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmit}>
          <h1>Nova Atividade</h1>
          <Input name="name" placeholder="Tarefa" />
          <Input name="description" placeholder="Descrição" />
          <Input name="status" placeholder="Status" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Atividade</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalAddTask;
