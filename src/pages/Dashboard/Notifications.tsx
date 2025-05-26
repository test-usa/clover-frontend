import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Notifications = () => {
  return <div>
        <div className="pt-4 ">
               {/* Header */}
               <div className="flex justify-between ">
                 <div className="flex items-center gap-4">
                   <MdOutlineKeyboardArrowLeft className="text-3xl" />
                   <h1 className="text-3xl">Notification</h1>
                 </div>
               
                  
                    <BsThreeDotsVertical className="text-3xl "></BsThreeDotsVertical>
                  
               
               </div>
               
             </div>
             <hr className="text-gray-300 my-5" />

             <div className="mx-3 md:mx-8 ">
              <div className="flex justify-between">
                <div>
                <h1 className="text-blue-400 text-2xl">Escrow Deposit Returned</h1>
                <p>Your escrow deposit of $47.5 USD for the swap Branding & Identity for Web Development has been successfully returned.   </p>
              </div>
              <div>time</div>
              </div>
               <hr className="text-gray-300 my-5" />

              
             </div>
              


  </div>;
};

export default Notifications;
