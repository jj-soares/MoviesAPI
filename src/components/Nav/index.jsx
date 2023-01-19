import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";



const Navbar = () => {


    return (
        <nav>
            <h2>
                <Link to='/'><BiCameraMovie/> Movies Lib</Link>
            </h2>
            <form >
                <input type="text" placeholder="Busque um Filme" />
                <button type="submit" >
                    <BiSearchAlt/>
                </button>


            </form>


        </nav>

    )
}

export default Navbar



















