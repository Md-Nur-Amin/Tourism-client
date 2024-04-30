import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center">Upps!!!</h2>
            <Link className="btn" to="/" > Go home </Link>
        </div>
    );
};

export default ErrorPage;