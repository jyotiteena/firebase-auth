import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateRecipe, viewRecipe } from "../features/recipeSlice"
import { useForm } from "react-hook-form"

const RecipeUpdate = () => {
    const { id } = useParams()

    const { register, handleSubmit, reset } = useForm()

    /////// alll recipe data
    const { recipeList } = useSelector((state) => state.recipe)


    //////// single recipe
    const singleRecipe = recipeList.find((recipe) => {
        return recipe.id === id
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(viewRecipe())
        reset(singleRecipe)
    }, [dispatch])

    const redirect = useNavigate()
    const update = (data)=>{
        dispatch(updateRecipe(data))
        redirect(-1)
    }
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={handleSubmit(update)}>
                    <div className="mt-4">
                        <select className="form-select" {...register('category')}>
                            <option value="">--select category--</option>
                            <option value="Sweets">Sweets</option>
                            <option value="Spicy">Spicy</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('title')} placeholder="title" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('chef')} placeholder="chef name" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('price')} placeholder="price" className="form-control" />
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-warning">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RecipeUpdate
