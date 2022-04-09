import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import styles from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IInnerFood } from '../Food';

interface IModalAddFood{
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (data: IInnerFood) => void
}

function ModalAddFood(props: IModalAddFood): JSX.Element {
  const { isOpen, setIsOpen } = props;

  const handleSubmit = async (data: IInnerFood) => {
    const { handleAddFood } = props;

    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <styles.Form ref={createRef()} onSubmit={handleSubmit}>
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
      </styles.Form>
    </Modal>
  );
}

export default ModalAddFood;
