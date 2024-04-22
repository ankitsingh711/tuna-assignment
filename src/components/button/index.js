import { useNavigate } from "react-router-dom";

const Button = ({ text, id }) => {

    const navigate = useNavigate();

    function handleOnClick(){
        navigate(`/recipes/${id}`);
    }
    return(
        <div className="btn">
            <button onClick={handleOnClick}>
                <span>{text}</span>
            </button>
        </div>
    )
}

export default Button;