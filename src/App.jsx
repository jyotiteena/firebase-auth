import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import RecipeForm from "./pages/RecipeForm"
import 'bootstrap/dist/css/bootstrap.css'
import RecipeList from "./pages/RecipeList"
import RecipeUpdate from "./pages/RecipeUpdate"
import SignUpWithGoogle from "./pages/SignUpWithGoogle"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import PrivateRoute from "./layout/PrivateRoute"
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<RecipeForm />} ></Route>
            <Route path="/view" element={<RecipeList />} ></Route>
            <Route path="/update/:id" element={<RecipeUpdate />} ></Route>
          </Route>
          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/signin" element={<SignIn />} ></Route>
          <Route path="/popup" element={<SignUpWithGoogle />} ></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
