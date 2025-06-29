import React, { useState } from "react";
import "./style.css";
import  recipesData  from "./recipesData.js"

const RecipeFilterApp = () => {

  const [cart, setCart] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const addToCart = (recipe) => {
    const isExisting = cart.find(item => item.id === recipe.id);
    if (isExisting) {
      alert("This recipe is already in the cart.");
      return;
    }
    setCart([...cart, recipe]);
  }
  const handleChange = (e) => {
    setMinRating(parseFloat(e.target.value));
  }

  const filteredRecipes = minRating ? recipesData.filter(item => item.rating >= minRating) : recipesData;

  const calculateAverageRating = () => {
    const total = filteredRecipes.reduce((acc, recipe) => acc + recipe.rating, 0);
    return filteredRecipes.length ? (total / filteredRecipes.length).toFixed(2) : '0.00';
  }

  console.log(cart);
  const totalCartItem = cart.length;

  return (
    <div className="recipe-app">
      <h1 className='heading'>🍽️ Recipe Explorer</h1>
      <div className='header'>
        <div>
          <label htmlFor="rating">Filter by Rating:</label>
          <select id='rating' name='rating' onChange={handleChange} value={minRating}>
            <option value='4.0'>4.0+</option>
            <option value='4.3'>4.3+</option>
            <option value='4.5'>4.5+</option>
            <option value='4.7'>4.7+</option>
            <option value='4.9'>4.9+</option>
          </select>
        </div>

        <div>
          <span className='cart'>🛒 Cart items: {' '}{totalCartItem}</span>
        </div>
      </div>

      <div className='avg-rating'>
        Average Rating: {calculateAverageRating()} ({filteredRecipes.length} recipes)
      </div>

      <div className='container'>
        {filteredRecipes.map(recipe => (
          <div className='card' key={recipe.id}>
            <img src={recipe.image} alt={recipe.id} className='img' />
            <div className='card-header mt-1'>{recipe.name}</div>
            <div className='card-body'>
              <div>🍴 Cuisine:{recipe.cuisine}</div>
              <div className='mt-1'>
                <span>⭐ Rating: {recipe.rating}</span>{' '}
                <span>({recipe.reviewCount} reviews)</span>
              </div>

              <button onClick={() => addToCart(recipe)} className='btn mt-1'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecipeFilterApp;
