import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen flex items-center justify-center flex-col space-y-10 text-center'>
            <h1 className='text-5xl '>404 Page: Not Found Page</h1>
            <button 
            onClick={()=> navigate("/")} 
            className="btn btn-active btn-neutral">Go to Home</button>

        </div>
    );
};

export default ErrorPage;