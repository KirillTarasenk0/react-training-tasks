import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();
    return (
      <>
        <h1>Success page</h1>
        <button onClick={() => navigate('/main')}>Go to main page</button>
      </>
    );
}