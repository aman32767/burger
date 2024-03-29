import React from 'react'
import classes from './Order.css'
const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients)
    {
        ingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]})
    }
    const ingredientOutput=ingredients.map(ig=>{
        return( <span
            style={{
                textTransform:'capitalize',
                display:'inline-block',
                margin:'0 8px',
                border:'1px solid grey',
                padding:'5px',
                boxShadow  : '0 5px 6px #ccc'
            }} 
        key={ig.name}>{ig.name} ({ig.amount})</span>)
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>price: <strong>{props.price}</strong> Rs</p>
        </div>
    )
}

export default order