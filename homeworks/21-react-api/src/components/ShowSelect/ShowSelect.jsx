import { useState } from 'react';
import { FILTER_BY_STATUS, useTodos } from '../../hooks/useTodos';

const ShowSelect = () => {
  const [selectStatusList, setSelectStatusList] = useState('all');

  const { dispatch } = useTodos();

  const handleChangeListStatus = (e) => {
    setSelectStatusList(e.target.value);
    dispatch({ type: FILTER_BY_STATUS, payload: e.target.value });
  };

  return (
    <select
      value={selectStatusList}
      onChange={handleChangeListStatus}
      className="select"
    >
      <option value={'all'}>All</option>
      <option value={'completed'}>Completed</option>
      <option value={'incompleted'}>Incompleted</option>
    </select>
  );
};

export default ShowSelect;
