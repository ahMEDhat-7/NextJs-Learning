import { ArrowLeft, ArrowRight } from "lucide-react";

const pages = [1,2,3,4,5,6];


function Pagination() {
  return (
    <div className="flex items-center justify-center mt-2 mb-10">
         <div className="flex items-center border rounded-sm border-gray-700 px-2 mx-1 py-1 text-xl cursor-pointer hover:bg-gray-300 text-gray-700 font-bold transition">
            <ArrowLeft /> Prev   
            </div>
        {pages.map((item,indx)=>(
            <div key={indx} className="border rounded-sm border-gray-700 px-2 mx-1 py-1 text-xl cursor-pointer hover:bg-gray-300 text-gray-700 font-bold transition">
                {item}
            </div>
        ))}
         <div className="flex items-center border rounded-sm border-gray-700 px-2 mx-1 py-1 text-xl cursor-pointer hover:bg-gray-300 text-gray-700 font-bold transition">
                Next <ArrowRight />
            </div>
    </div>
  )
}

export default Pagination