import React,{useState, useEffect} from 'react'
import  './Nav.css'
import axios from 'axios'
import Detail from './Detail'
import Page from './Page'
function ResturentDetail() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [ratingOrder, setRatingOrder] = useState("asc")
    const [PriceChange, setPriceChange] = useState("asc")
    const [q, setQ] = useState("")
    const [text, setText] = useState("")
    const [data, setData] = useState([])

    const fetchData = async({page,ratingOrder,PriceChange,q})=>{
        setLoading(true)
        axios({
            method:'get',
            url:'http://localhost:3000/food',
            params:{
                _page:page,
                _limit:5,
                _sort:'rating,cost',
                // _order:"ratingOrder,cost",
                _order:`${ratingOrder},${PriceChange}`,
                q:q
            }
        })
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
        .catch(err=>{
            setError(true)
            setLoading(false)
        })
    }
    useEffect(()=>{
        setLoading(true)
        fetchData({page,ratingOrder,PriceChange,q})
    },[page,ratingOrder,PriceChange,q])
    console.log(data.length)
  return (
    <>
        <div className='container'>
        <input onChange={(e)=>setText(e.target.value)} className="nav-bar" placeholder='Search for restaurant, cuisine or a dish' type="text" />
        <button onClick={()=>setQ(text)} className='search'>Search</button>
    </div>
        {loading && <div>loading.....</div>}
        <div className='main-sorting-container'>
        <div className='sorting-container'>
            <button className='sorting-button' disabled={ratingOrder==='desc'} onClick={()=>setRatingOrder("desc")}>High To Low rating</button><br />
            <button className='sorting-button' disabled={ratingOrder==='asc'} onClick={()=>setRatingOrder("asc")}>low To high rating</button>
        </div>
        <div>
            <img style={{width:"100px"}} src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726" alt="" />
        </div>
        <div className='sorting-container'>
            <button className='sorting-button' disabled={PriceChange==='desc'} onClick={()=>setPriceChange("desc")}>High To Low price</button><br />
            <button className='sorting-button' disabled={PriceChange==='asc'} onClick={()=>setPriceChange("asc")}>low To high price</button>
        </div>
        </div>
            <Detail data={data}/>
            <div className='page-container'>
                <button className='page2' disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
                <Page currentPage={page} lastPage={7} onPageChange={setPage}/>
                <button className='page2' onClick={()=>setPage(page+1)}>Next</button>
            </div>
    </>
  )
}

export default ResturentDetail