import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function LectureBtn({type}){
    // review completed details cancellation writeReview download
    const [info, setInfo] = useState({
        style:'',
        content:'',
        image:'',
    });

    const {style, content, image} = info;
    


    // const navigate = useNavigate();

    // const goToLecture = (link)=>{
    //   navigate(`/${link}`);
    // }

    useEffect(()=>{
        if(type === 'review') setInfo({
            style:'lectureNavigate-btn lectureBtn',
            content:'복습하기',
            image:'/assets/img/btn/post.svg',
        })
        if(type === 'completed') setInfo('')
        if(type === 'details') setInfo('')
        if(type === 'cancellation') setInfo('')
        if(type === 'writeReview') setInfo('')
        if(type === 'download') setInfo('')
    },[type])

    
    return (
        <button onClick={''} className={style}>
            <img className="" width={15} height={15} src={image} alt="버튼 이미지" />
            {content}
        </button>
    )
}