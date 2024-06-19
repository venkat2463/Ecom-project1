import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home(){
const [products, setProducts] = useState([]);
//api la irunthu kidaikura data ha above line la store pani vachipom

const [searchParams, setSearch] = useSearchParams()

//use effect ethuku use pandrom na antha page first time load agum pothu fetch panitu varum
useEffect(()=> {
fetch(process.env.React_APP_API_URL + '/products?'+ searchParams)
.then(res => res.json())
//res json vanguren for the abvoe line
.then(res=>setProducts(res.products))
//res ha set products la kudukuren
},[searchParams])

    return <Fragment>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product =><ProductCard product={product}/>)}
        
      </div>
    </section>


  
    </Fragment>
}