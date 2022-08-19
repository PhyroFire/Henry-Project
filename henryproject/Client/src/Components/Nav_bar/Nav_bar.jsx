import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'
import './Nav_bar.css'

export default function Nav_bar() {


    return (
        <nav className="Nav_bar">

            <Link id="icon" to='/'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>

                <Link to='/home'><button>Tienda</button></Link>

                <Link to='/home/games'><button>Explorar</button></Link>

                <Link to='/loggin'><button>Loggin</button></Link>
            </div>

            <Link id="cart" to='/cart'>
                <img src={Cart} alt="cart" />
            </Link>
        </nav>
    )
}