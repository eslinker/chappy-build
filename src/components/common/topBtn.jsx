export default function TopBtn(){
    const handleTopScroll = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <button onClick={handleTopScroll} className='lecture-topBtn'><img src="/assets/img/btn/upAarrow.svg" alt="위로 향하는 화살표 버튼" /></button>
    )
}