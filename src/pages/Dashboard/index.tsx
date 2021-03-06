import { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Food, { IFood, IInnerFood } from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import styles from './styles';

function Dashboard(): JSX.Element {
  const [foods, setFoods] = useState<IInnerFood[]>([] as IInnerFood[]);
  const [editingFood, setEditingFood] = useState<IInnerFood>({} as IInnerFood);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const loadFoodData = useCallback(async () => {
    const response = await api.get('/foods');
    setFoods(response.data);
  }, []);

  useEffect(() => {
    loadFoodData();
  }, [loadFoodData]);

  const handleAddFood = async (food: IInnerFood) => {
    try {
      const response: {data: IInnerFood} = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoods([...foods, response.data]);
    } catch (err) {
      setFoods([...foods]);
    }
  };

  const handleUpdateFood = async (food: IFood) => {
    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map((f) => (f.id !== foodUpdated.data.id ? f : foodUpdated.data));

      setFoods(foodsUpdated);
    } catch (err) {
      setFoods([...foods]);
    }
  };

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter((food) => food.id !== id);

    setFoods(foodsFiltered);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleEditFood = (food: IInnerFood) => {
    setEditingFood(food);
    setEditModalOpen(true);
  };

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <styles.FoodsContainer data-testid="foods-list">
        {foods
          && foods.map((food) => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </styles.FoodsContainer>
    </>
  );
}

export default Dashboard;
