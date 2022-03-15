import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFood, IInnerFood } from '../Food';

interface IModalEditFood{
  setIsOpen: () => void,
  isOpen: boolean,
  handleUpdateFood: (data: IFood) => void,
  editingFood: IInnerFood
}

const ModalEditFood = (props: IModalEditFood) => {
  const { setIsOpen, handleUpdateFood, isOpen, editingFood } = props;

  const handleSubmit = async (data: IFood) => {

    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={ createRef() } onSubmit={ handleSubmit } initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

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

export default ModalEditFood;
