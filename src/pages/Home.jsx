import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = ()=> {
    const API_URl  = "https://fakestoreapi.com/products"
    const [loading ,setLoading]= useState(false)
    const [posts , setPost]= useState ([])
    async function fetchData(){
        setLoading(true)
      try{
        const result =await fetch(API_URl);
        const data = await result.json();
        setPost(data);
      }
    catch{
       setPost([])
    }
    setLoading(false)
    }

    useEffect(()=>{
      fetchData();
    },[])


    return (
       <div  className="mt-20">
         
          {
             loading ? (<Spinner/>) :
              posts.length >0 ?
              ( <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 space-y-10 space-x-5 w-[65%] mx-auto">
                {posts.map( (post)=>(
                <Product key={post.id} post={post}/>
             ) )}
             </div>):<p>No Data Found</p>
          }
       </div>
       
    )
};

export default Home;