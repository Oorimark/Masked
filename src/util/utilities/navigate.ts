import { useNavigate  } from "react-router-dom";
export const navigateBack = () => {
    const navigate = useNavigate()
    navigate(-1)
}