import {createRef} from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFood } from '../Food';

interface IModalAddFood{
  isOpen: boolean
  setIsOpen: () => void
  children: JSX.Element
  handleAddFood: (data: IFood) => void
}

const ModalAddFood = (props: IModalAddFood) => {
  const { isOpen, setIsOpen } = props;
  

  const handleSubmit = async (data: IFood) => {
    const { handleAddFood } = props;

    handleAddFood(data);
    setIsOpen();
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>        
      <Form ref={ createRef() } onSubmit={ handleSubmit }>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
