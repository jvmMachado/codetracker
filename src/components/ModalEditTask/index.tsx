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

    console.log(data);
    handleUpdateTask(data);
    setIsOpen();
  };


  const { isOpen, setIsOpen, editingTask } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingTask}>
        <h1>Editar Prato</h1>
        <Input type="hidden" name="id" defaultValue={editingTask?.id} />
        <Input name="title" placeholder="Tarefa" />
          <Input name="description" placeholder="Descrição" />
          <label htmlFor="pendente"> Pendente </ label>
          <Input type="radio" name="status" id="pendente" value="PENDENTE" defaultChecked/>

          <label htmlFor="concluida"> Concluída </ label>
          <Input type="radio" name="status" id="concluida" value="CONCLUIDA" />

          <label htmlFor="cancelada"> Cancelada </ label>
          <Input type="radio" name="status" id="cancelada" value="CANCELADA" />

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
