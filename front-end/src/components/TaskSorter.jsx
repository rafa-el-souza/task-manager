import React from 'react';
import { useDispatch } from 'react-redux';
import { setAscendingOrder, setSortBy } from '../redux/reducers/taskReducer';

function TaskSorter() {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const { name, value } = e.target;

    if (name === 'sortBy') return dispatch(setSortBy(value));

    return dispatch(setAscendingOrder(value === 'true'));
  };

  return (
    <>
      <div onChange={handleSort}>
        <input type="radio" value="createdAt" name="sortBy" />
        {' '}
        createdAt
        <input type="radio" value="name" name="sortBy" />
        {' '}
        name
      </div>
      <div onChange={handleSort}>
        <input type="radio" value name="ascendingOrder" />
        {' '}
        ascending
        <input type="radio" value={false} name="ascendingOrder" />
        {' '}
        descending
      </div>
      <div onChange={handleSort}>
        <input type="radio" value="pendente" name="sortBy" />
        {' '}
        pendente
        <input type="radio" value="andamento" name="sortBy" />
        {' '}
        andamento
        <input type="radio" value="pronto" name="sortBy" />
        {' '}
        pronto
      </div>

    </>
  );
}

export default TaskSorter;
