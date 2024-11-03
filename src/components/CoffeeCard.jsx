import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCard = () => {
    const data=useLoaderData()


  const {category}=useParams()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between w-11/12 mx-auto">
           
                {
                    data.map((coffee)=> <Card key={coffee.id} coffee={coffee}></Card>)
                }
           
        </div>
    );
};

export default CoffeeCard;