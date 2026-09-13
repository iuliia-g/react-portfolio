import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

export const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Creative projects</h1>
            <p className="pl-desc">
              These projects showcase my progression from static websites to dynamic web applications using modern front-end and back-end technologies.
            </p>                        
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
              desc={item.desc}
            />
          ))}                
        </div>
    </div>
  )
}

export default ProductList
