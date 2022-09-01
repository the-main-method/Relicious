import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import {motion} from "framer-motion"

function Recipe() {

    let params = useParams();
    const [Recipe, setRecipe] = useState([]);
    const [ActiveTab, setActiveTab] = useState("Instructions");
    

    const getRecipe = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=942e2dd0d945472ba6fd085dc9725570`)
        const Recipe = await data.json()
        setRecipe(Recipe)
    }

    useEffect(() => {
        getRecipe(params.id)
    }, [params.id]);

  return (
    <RecipeWrapper animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
        <div>
            <h2>{Recipe.title}</h2>
            <img src={Recipe.image} alt={Recipe.title} />
        </div>
        <Info>
            <Flex>
                <Button className={(ActiveTab === "Instructions") ? "active" : ""} onClick={() => setActiveTab("Instructions")}>Instructions</Button>
                <Button className={(ActiveTab === "Ingredients") ? "active" : ""} onClick={() => setActiveTab("Ingredients")}>Ingredients</Button>
            </Flex>
            {ActiveTab === "Instructions" && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: Recipe.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: Recipe.instructions}}></h3>
                </div>
            )}
            {ActiveTab === "Ingredients" && (
                <ul>
                {Recipe.extendedIngredients.map((ingredient) => {
                    return (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )
                })}
                </ul>
            )}
        </Info>
    </RecipeWrapper>
  )
}

const RecipeWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(39deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    img{
        max-width: 20rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;        
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 10rem;
`
const Flex = styled.div`
    display: flex;
`

export default Recipe