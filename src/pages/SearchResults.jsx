import { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import styled from "styled-components"
import {motion} from "framer-motion"


function SearchResults() {

    const [SearchResults, setSearchResults] = useState([]);
    const Params = useParams()

    useEffect(() => {
        getSearchResults(Params.search);
    }, [Params.search]);

    const getSearchResults = async (search) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=942e2dd0d945472ba6fd085dc9725570&number=9&query=${search}`);
        const recipes = await data.json();
        setSearchResults(recipes.results);
    }

  return (
    <Grid animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
        {
            SearchResults.map((recipe) => {
                return (
                    <Card key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </Link>
                    </Card>
                )
            })
        }
    </Grid>
  )
}

const Grid = styled(motion.div)`
 displey: grid;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 grid-gap: 3rem;
`
const Card = styled.div`
    img{ 
        width: 100%;
        height: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default SearchResults