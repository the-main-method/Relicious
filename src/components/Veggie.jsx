import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom"

function Veggie() {
    const [Veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    const check = localStorage.getItem("Veggie");
    if(check){
        setVeggie(JSON.parse(check));
        console.log("Veggie is set")
    }else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=942e2dd0d945472ba6fd085dc9725570&number=9&diet=vegetarian,vegan`
          );
        const data = await api.json();

        localStorage.setItem("Veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        console.log("Veggie was just set");
    }
    
  };


  return (
    <div>
      <Wrapper>
        <h3>Our Veggie Picks</h3>

        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "4rem",
        }}>
          {
          Veggie.map((recipe) => {
            return (
                <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={"/recipe/" + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient></Gradient>
                      </Link>
                    </Card>
                </SplideSlide>
              
            );
          })
          }
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    position absolute;
    left: 0;
    object-fit: cover;
  }
  p{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    z-index: 4;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 30%;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie