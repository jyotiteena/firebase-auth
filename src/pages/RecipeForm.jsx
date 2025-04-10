import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { createRecipe } from "../features/recipeSlice"
import { useNavigate } from "react-router-dom"

const RecipeForm = () => {

    const { register, handleSubmit, reset } = useForm()

    const redirect = useNavigate()
    const dispatch = useDispatch()
    function addedRecipe(data){
        dispatch(createRecipe(data))
        alert("recipe added!")
        redirect('/view')
    }
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={handleSubmit(addedRecipe)}>
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
                        <button className="btn btn-info">Added</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RecipeForm
