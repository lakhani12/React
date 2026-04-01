import{MoveUpRight} from "lucide-react";

const Card = ({data}) => {
    
  return (
    <>
      <div className="card w-full h-auto max-w-sm bg-black rounded-[10%] p-2 text-white shadow-2xl">
        <div className="bg-green-800 text-center roundrd-b-[12%] rounded-[10%]">
            <img src={data.photo} alt="img"  className="w-96 object-cover rounded-[10%]"/>
            <span className="py-1">Free Delivery until 30/03/2026</span>
        </div>
        <div className="content px-6 py-2 flex justify-between items-center ">
          <div className="details ">
            <h2 className="text-green-50 text-3xl">{data.juice_name}</h2>
            <div className="more pt-4 flex justify-between gap-2 items-center">
                <span className="text-base bg-green-400/20 text-green-50 rounded-full rounded-4 px-1 py-2">{data.ingredients[0]}</span>
                <span className="text-base bg-green-400/20 text-green-50 rounded-full rounded-4 px-1 py-2">{data.ingredients[1]}</span>
                <span className="text-base bg-green-400/20 text-green-50 rounded-full rounded-4 px-1 py-2">{data.ingredients[2]}</span>
            </div>
          </div>
          <div className="price border-l-2 border-green-400/20 pl-5">
            <h2 className="text-4xl font-bold">{data.price}</h2>
            <p className="flex gap-2 items-center text-[14px]">Bada Glass<span><MoveUpRight className="w-3.5 h-3.5 " /></span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
