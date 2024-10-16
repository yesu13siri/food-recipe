import React from "react"

const Products =({data}) =>{
    return (
        <div>
        <div className="row">
           {data.map(data =>
           <div className="col-md-4">
            <div class="card"style={{"width":"18rem" ,"height":"32rem","marginBottom":"3rem" }}>
                <img class="card-img-top"  src={data.recipe.image} alt="Card image cap"/>
                <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">total amount of calaries : (Matn.round(data.recipe.calories))</p>
                        <a href ="a" className="btn btn-primary">buy</a>
                    </center>
                </div>
            </div>
           </div>
                        
           )
           
        }
        </div>
        </div>
    )
}
            
        
        
export default Products;