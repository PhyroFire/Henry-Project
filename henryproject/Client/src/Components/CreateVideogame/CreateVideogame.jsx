import React from "react"
import { useDispatch } from "react-redux"
import './CreateVideogame.css'
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, postVideoGame } from "../../redux/Actions/Index"

export default function CreateVideogame () {
    const dispatch= useDispatch()
    let genres= [{id:1,name:"juego1"},{id:2,name:"juego2"},{id:3,name:"juego3"}]
    let platforms= [{id:1,name:"plat1"},{id:2,name:"plat2"},{id:3,name:"plat3"}]
    //let genres = useSelector(state => state.genres)
    //let platforms = useSelector(state => state.platforms)


    useEffect(()=>{
        dispatch(getGenres());
        dispatch(getPlatforms());
    },[dispatch])
     //estados
     const [state,setState]=useState({
         name:"",
         price: 0,
         description: '',
         rating: 1 ,
         image: '',
         videoTrailer: '' ,
         platforms: [],
         genres: [],
         
     })

     const[errors,setErrors]=useState({
        name:true,
        price: true,
        description: true,
        rating: true ,
        image: false,
        videoTrailer: false ,
        platforms: true,
        genres: true,
        
    })

    const[validate,setValidate]=useState({
        name:false,
        price: false,
        description: false,
        rating: false ,
          
    })
    //const expresiones={
        //         name: /^[a-zA-ZñÑ]{1,16}$/,
        //         price:/^[0-9]{}$/,
        //         description: /^[a-zA-ZñÑ]{1,40}$/,
        //         image: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
        //         videoTrailer: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
        //     }
    //function name
    function onChangeName(e){
     setState({...state,[e.target.name]:e.target.value})
         setErrors({...errors,[e.target.name]:!(e.target.value.length>4&&e.target.value.length<15)})
     
    }
    function onBlurName(e){

    }
    function onKeyUp(e){

    }
    function onChangePrice(e){
        setState({...state,[e.target.name]:e.target.value})
        setErrors({...errors,[e.target.name]:(e.target.value===undefined||e.target.value<0)})
    
    }
    function onBlurPrice(e){

    }
    function onKeyUpPrice(e){

    }
    function onChangeDescription(e){
        setState({...state,[e.target.name]:e.target.value})
        setErrors({...errors,[e.target.name]:!(e.target.value.length>10&&e.target.value.length<200)})
    }
    function onBlurDescription(e){

    }
    function onKeyUpDescription(e){

    }
    function onChangeRating(e){
        setState({...state,[e.target.name]:e.target.value})
        setErrors({...errors,[e.target.name]:(e.target.value<1||e.target.value>5)})
    }
    function onBlurRating(e){

    }
    function onKeyUpRating(e){

    }
    function onChangeGenre(e){
        if(state.genres.includes(e.target.value)){
            alert("genero previamente seleccionado")
            return
        }
        setState({...state,[e.target.name]:[...state.genres,e.target.value]})
        setErrors({...errors,genres:false})
    }
    function onChangePlatform(e){
        if(state.platforms.includes(e.target.value)){
            alert("plataforma previamente seleccionada")
            return
        }
        setState({...state,[e.target.name]:[...state.platforms,e.target.value]})
        setErrors({...errors,platforms:false})
        
    }
    function onChangeImg(e){

    }
    function onBlurImg(e){

    }
    function onKeyUpImg(e){

    }
    function onChangeVideo(e){

    }
    function onBlurVideo(e){

    }
    function onKeyUpVideo(e){

    }
    function onSubmitCreate(e){
        e.preventDefault()
        dispatch(postVideoGame(state))
    }
    function deleteGenre(e){
      if(!(state.genres.length-1)){
          setErrors({
              ...errors,genres:true
          })
      }
      setState({...state,genres:state.genres.filter(genre=>genre!=e.target.value)})
    }
    function deletePlatform(e){
        if(!(state.platforms.length-1)){
            setErrors({
                ...errors,platforms:true
            })
        }
        setState({...state,platforms:state.platforms.filter(platform=>platform!=e.target.value)})
      
    }
    function validar(e){
        e.preventDefault()
        for(var props in errors){
            if(errors[props]){
                alert ("debe corregir errores")
                return
            }
        }
        alert("todo bien")
    }
    return(
        <div className="div">
       <form className="videogame-form" onSubmit={e=>validar(e)}>
        {/* componente name */}
        <div>
         <label>Name</label>
         <input type="text" onChange={(e)=>onChangeName(e)}name="name" value={state.name} onBlur={(e)=>onBlurName(e)} onKeyUp={(e)=>onKeyUp} placeholder="ingresar nombre"></input>
         {
                     (errors.name && !validate.name )&& (
                        <p>nombre incorrecto</p>
                     )
                 }
                {
                     validate.name && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Price</label>
         <input type="number" onChange={(e)=>onChangePrice(e)}name="price" value= {state.price} onBlur={(e)=>onBlurPrice(e)} onKeyUp={(e)=>onKeyUpPrice(e)} placeholder="ingresar precio"></input>
         {
                     (errors.price && !validate.price )&& (
                        <p>precio incorrecto</p>
                     )
                 }
                {
                     validate.price && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Description</label>
         <textarea type="text" onChange={(e)=>onChangeDescription(e)}name="description" value= {state.description} onBlur={(e)=>onBlurDescription(e)} onKeyUp={(e)=>onKeyUpDescription(e)} placeholder="ingresar description"></textarea>
         {
                     (errors.description && !validate.description )&& (
                        <p>Descripcion incorrecta</p>
                     )
                 }
                {
                     validate.description && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Rating</label>
         <input type="text" onChange={(e)=>onChangeRating(e)}name="rating" value= {state.rating} onBlur={(e)=>onBlurRating(e)} onKeyUp={(e)=>onKeyUpRating(e)} placeholder="ingresar rating"></input>
         {
                     (errors.rating && !validate.rating )&& (
                        <p>Rating incorrecto</p>
                     )
                 }
                {
                     validate.rating && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Imagen</label>
         <input type="image"onChange={(e)=>onChangeImg(e)}name="image" value= {state.image} onBlur={(e)=>onBlurImg(e)} onKeyUp={(e)=>onKeyUpImg(e)} placeholder="ingresar imagen"></input>
         {
                     (errors.image && !validate.image )&& (
                        <p>{errors.image}</p>
                     )
                 }
                {
                     validate.image && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
        <label>VideoTrailer</label>
        <input type="video" onChange={(e)=>onChangeVideo(e)}name="videoTrailer" value= {state.videoTrailer} onBlur={(e)=>onBlurVideo(e)} onKeyUp={(e)=>onKeyUpVideo(e)} placeholder="ingresar video"></input>
         {
                     (errors.videoTrailer && !validate.videoTrailer )&& (
                        <p>{errors.videoTrailer}</p>
                     )
                 }
                {
                     validate.videoTrailer && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
        <label>Genres</label>
        <select name="genres" onChange={(e)=>onChangeGenre(e)}>
        <option selected disabled>Seleccionar Genero</option>
        {genres.map(genre=>{
            return(
                <option value={genre.name} key={genre.id}>{genre.name} </option>
            )
        })}
        </select>
        </div>
        <div>
         {state.genres.map(e=>{
             return(
                 <button onClick={(e)=>deleteGenre(e)} value={e}>{e}</button>
             )
         })}
        </div>
        {
                     (errors.genres && !validate.genres )&& (
                        <p>Debe seleccionar generos</p>
                     )
                 }
                {
                     validate.videoTrailer && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        <div>
        <label>Platforms</label>
        <select onChange={(e)=>onChangePlatform(e)}>
        <option>Seleccionar Plataforma</option>
        {platforms.map(e=>{
            return(
                <option value={e.name} key={e.id}>{e.name} </option>
            )
        })}
        </select>
        <div>
         {state.platforms.map(e=>{
             return(
                 <button onClick={(e)=>deletePlatform(e)} value={e}>{e}</button>
             )
         })}
        </div>
        {
                     (errors.platforms && !validate.platforms )&& (
                        <p>Debe seleccionar plataformas</p>
                     )
                 }
                {
                     validate.platforms && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
    
       <button type="submit" onClick={(e)=>onSubmitCreate(e)}>Submit</button>

        </form>
        {/* visualizar */}

        <div>
         <h1>{state.name}</h1>
         <h3>{state.image}</h3>
         <p>{state.description}</p>
         <p>{state.price}</p>
         <p>{state.rating}</p>
         <p>{state.videoTrailer}</p>
        </div>
        </div>
    )

  







// //Funcion expresion
// function validarExpresiones(ev){
//     switch (ev.target.name) {
//         case "name":
//             if(ev.target.value===""){
//                 setError({...error,name:true});
//                 setValidate({...validate,name:false});
//             }else{
//                 if(expresiones.name.test(ev.target.value)){
//                     setValidate({...validate,name:false});
//                 }else{
//                     setValidate({...validate,name:true});
//                 }
//             }
//             break;
//         default:
//             break;
//     }
// }




// function handleSubmit(e) {
//         e.preventDefault()
//         dispatch(createvideogame(game))
//         alert('VIDEOJUEGO CREADO !! ')
//         setGame({
//             name: '',
//             price: 0,
//             description: '',
//             rating: 1 ,
//             image: '',
//             videoTrailer: '' ,
//             platforms: [],
//             genres: [],
//         })
//     }


//     function handleChange(e) {
//         setGame({
//             ...game,
//             [e.target.name]: e.target.value
//         })
//     }
//     //validacion
//     function handleChangeName(e){
//         setGame({
//             ...game,
//             [e.target.name]: e.target.value
//         })
//         setError({...error,name:false});
//     }

//     function onBlurName(e){
//         validarExpresiones(e);
//     }
//     function onKeyName(e){
//         validarExpresiones(e);
//     }


//     function handleGenre(e) {
//         setGame([{
//             ...game,
//             genres:[...game.genres, e.target.value]
//         }
//         ])
//     }

//     function handlePlatform (e){
//         setGame([{
//             ...game,
//             platforms:[...game.platforms, e.target.value]
//         }
//         ])
//     }
 
//     function onChangeDeleteGenres(e){
//         setGame([{
//            ...game,
//            genres:[...game.genres,e.target.value]
//         }
//         ])

        
//     }


//     return (
//         <div className="div">
//             <form className="videogame-form" onSubmit={(e) => handleSubmit(e)}>
//                 <label>Name</label>
//                 <input type="text" name='name' onChange={(e) => handleChangeName(e)} onBlurName={(e)=>onBlurName(e)} onKeyName={(e)=>onKeyName(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.name && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Price</label>
//                 <input type="text" name='price' onChange = {(e) => handleChange(e)} ></input>
//                 {
//                     (error.price && !validate.price )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.price && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Description</label>
//                 <input type="text" name='description' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.description && !validate.description )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.description && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Image</label>
//                 <input type="text" name='image' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 <label>Video Trailer</label>
//                 <input type="text" name= 'videoTrailer' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 <label>Genres</label>
//                 <select onChange={(e) => handleGenre(e)}>
//                     <option>Select Genre</option>
//                     {
//                         genres.map(genre => {
//                             return(
//                                 <option
//                                 value={genre.name}
//                                 key={genre.id}
//                                 >{genre.name}</option>
//                             )
//                         })
//                     }
//                 </select>
//                     <div>
                       
//                     {
//                             genres?.map((c)=>{
//                                 return(
//                                     <div key={c.id} >
//                                         <p>{c.name}</p>
//                                         <button onChange={()=>onChangeDeleteGenres(c.name)}>X</button>
//                                     </div>
//                                     )
//                             })
//                     }
//                     </div>

//                 <label>Platforms</label>
//                 <select onChange={(e) => handlePlatform(e)}>
//                     <option>Select Platform</option>
//                     {
//                         platforms.map(platform => {
//                             return(<option key={platform.id} value={platform.name}>{platform.name}</option>)
//                         })
//                     }
//                 </select>
//                 <button type="submit" >Add Videogame</button>
            
//             </form>
//         </div>
//     )
}