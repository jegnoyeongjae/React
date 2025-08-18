import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoDetail } from "../components";

const DetailPage = ({todos}) => {
    const {id} = useParams();
    const numbericId = Number(id);

    const [todo, setTodo] = useState({});

    useEffect(()=>{
        fetchData(todos);
    }, [id, todos]);

    const fetchData = (data) => {
        const found = data.find(item => item.id === numbericId);
        setTodo(found);
    }

    return(
        <div id="DetailPage">
            <TodoDetail todo={todo} />
        </div>
    )
}

export default DetailPage;