import style from './recipes.module.css'

const Recipes = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipes}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li className={style.text}>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipes;