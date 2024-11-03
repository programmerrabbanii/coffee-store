import { Link, useParams } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div>
             <div className="py-8">
            <div role="tablist" className="tabs tabs-lifted">
             {
                categories.map((category)=><Link key={category.category} to={`/category/${category.category}`} role="tab" className="tab">{category.category}</Link>
            )
             }           
          </div>
            </div>


            
            
        </div>
    );
};

export default Categories;