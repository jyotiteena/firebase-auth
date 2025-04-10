import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteRecipe, viewRecipe } from "../features/recipeSlice"
import { BsTrash } from "react-icons/bs"
import { FaPen, FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const RecipeList = () => {

    const { recipeList } = useSelector((state) => state.recipe)
    console.log(recipeList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(viewRecipe())
    }, [])


    const trash = (id) => {
        if (confirm("do you want to delete this recipe")) {
            dispatch(deleteRecipe(id))
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {
                        recipeList.map((recipe, index) => {
                            return (
                                < div className="col-lg-4" key={index} >
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <h4>{recipe?.title}</h4>
                                            <ul className="list-unstyled">
                                                <li>category : {recipe?.category}</li>
                                                <li>chef : {recipe?.chef}</li>
                                                <li>price : {recipe?.price}</li>
                                            </ul>
                                            <button onClick={() => trash(recipe.id)} className="btn btn-danger"><BsTrash /></button>
                                            <NavLink className="btn btn-warning mx-2" to={`/update/${recipe.id}`}><FaPen/></NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default RecipeList
