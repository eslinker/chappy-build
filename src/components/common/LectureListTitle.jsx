import { useEffect, useState } from "react";

export default function LectureListTitle({type}){
    const [title, setTitle] = useState({
        subject:'',
        period:'',
        progress:'',
        other:'',
    })
    
    useEffect(()=>{
        if(type === 'student') {
            setTitle({
                subject:'과목',
                period:'기간',
                progress:'학습 진행률',
                other:'',
            })
        }
    },[type])

    const {subject, period, progress, other} = title;

    return (
        <li className="lectureListTitle row mx-0">
            <div className="col-3"><span style={{paddingLeft:'32px'}}>{subject}</span></div>
            <div className="col-2">{period}</div>
            <div className="col-5">{progress}</div>
            <div className="col-2">{other}</div>
        </li>
    )

}