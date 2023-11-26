import React, { useEffect, useState } from "react";
import { RecentPostForm } from "../../styles/Login/MyPage.styled";

const PostList = () => {

    const [dataList, setDataList] = useState([]);

    /*useEffect(() => {
        setDataList(PostList)
    }, [])*/

    return (
        <RecentPostForm>
        <div> 오늘 2시 밥 먹을 사람?
        </div>
        </RecentPostForm>
        
    )
}

export default PostList;