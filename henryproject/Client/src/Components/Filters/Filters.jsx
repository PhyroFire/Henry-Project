import SearchBar from '../SearchBar/SearchBar'
import './Filters.css'
import Cards from '../Cards/Cards.jsx'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllGames } from '../../redux/Actions/Index'
import { useState } from 'react';
import Paginado from '../Paginado/Paginado';

export default function Filters () {

    let dispatch = useDispatch()

    let videogames = useSelector(state => state.videogames)
    

    useEffect(() => {    
        if(videogames.length === 0) {
            dispatch(getAllGames())   
            console.log('Axios API') 
        }
    }, [])

    function onSearch(name) {
        dispatch(getAllGames(name))
    }


    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(10)
    
    //videojuegos filtradas por pagina
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogame = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className='filters'>

            <div className="show-filters">
                <span> Filter by </span>
             
                <span> Genres </span>
           
                <span> tags </span>
            
             
            </div>


            <div className='Sorts-Games'>

                <div className='Sorts'>
                    <span> Sort </span>
                    <br></br>
                    <SearchBar
                    onSearch={onSearch}
                    ></SearchBar>
                </div>

                     <div className='PAGINADO'>
                        <Paginado
                        VideogamesPerPage = {videogamesPerPage}
                        allVideogames = {videogames.length}
                        paginado = {paginado}
                        /> 
                    </div>
                <div className='Games-Cards-Div'>
                    {
                        currentVideogame.map(card => {
                            return (<Cards
                            card={card}
                            />)
                        })
                    }
                </div>

            </div>


        </div>
    )
}