import { useState, useEffect } from 'react'
import cardData from './Components/CardData';
import "./Menu.css"

function Menu() {
  const [menuItems, setMenuItems] = useState(cardData);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    filterItems(selectedCategory);
  }, [selectedCategory]);

  const filterItems = (category) => {
    const filteredItems = (category === 'all') ? cardData : cardData.filter(item => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <div id="menu-page" className='menu-page' >
      <div id="category-buttons" className='menu-category'>
        <button onClick={() => setSelectedCategory('all')}>All Items</button>
        <button onClick={() => setSelectedCategory('cake')}>Cakes</button>
        <button onClick={() => setSelectedCategory('Pastry')}>Pastries</button>
        <button onClick={() => setSelectedCategory('Bread')}>Breads</button>
        {/* Add more category buttons as needed */}
      </div>
      <div className='menu-content'>
        <div id="menu-items" className='menu-items'>
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              {item.Image && <img src={item.Image} alt={item.title} style={{ maxWidth: '100%' }} />}
              <h3>{item.title}</h3>
              {/* <p>{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu