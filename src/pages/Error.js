import { Link } from "react-router-dom"
import Home from "./Home"

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4">404 Error</h1>
                <p className="text-gray-600 mb-6">Oops! The page you're looking for does not exist.</p>
                <Link to={"/"} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default Error