import { useState } from 'react';
import useItemsContext from '../hooks/use-items-context';

function ItemCreate() {
  const [description, setDescription] = useState('');
  const { createItem } = useItemsContext();

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createItem(description);
    setDescription('');
  };

  return (
    <div className="item-create">
      <h3>Add a item</h3>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input className="input" value={description} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default ItemCreate;
