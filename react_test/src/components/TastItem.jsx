import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateformatter";
import { checkIsDone } from "../utils/isDone";

const TastItem = ({ todo, index }) => {

    return (
        <li>
            <span className="TastItemNum">
                {index + 1}
            </span>
            <span className="TastItemTitle">
                <Link to={`/detail/${todo.id}`}>
                    {todo.title}
                </Link>
            </span>
            <span className="TastItemIsDone">
                {checkIsDone(todo.isDone)}
            </span>
            <span className="TastItemDate">
                {formatDate(todo.startDate)}
            </span>
        </li>
    );
};

export default TastItem;
