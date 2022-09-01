import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import {GiNoodles} from "react-icons/gi"
import {CgBowl} from "react-icons/cg"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles></GiNoodles>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/African"}>
            <CgBowl></CgBowl>
            <h4>African</h4>
        </SLink>
    </List>
  )
}


const List = styled.div`
 display: flex;
 justify-content: center;
 margin: 2rem 0;

`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(39deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transfrom: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }

`

export default Category