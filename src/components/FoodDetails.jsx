import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c1f0d5e121f9448299eb12b8923300db";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div></div>
        <div>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "Vegeterian" : "Non-vegeterian"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          Price : <span>{food.pricePerServing / 100}$</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
