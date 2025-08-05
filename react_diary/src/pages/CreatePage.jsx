import { useNavigate } from "react-router-dom";

import { Header } from "../components/commen";
import { DiaryEdit } from "../components/diary";

const CreatePage = ({onCreate}) => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1);
    }

    return(
        <div className="CreatePage">
            <Header 
                title={'새로운 일기 쓰기'}
                btnLeft={'이전 페이지로 이동'} 
                handleLeftBtn={handleClickBack}
            />
            <DiaryEdit isEdit={false} onCreate={onCreate} />
        </div>
    )
}

export default CreatePage;