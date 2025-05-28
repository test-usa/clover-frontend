import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Notifications = () => {
  return <div>
        <div className="pt-4 px-4">
               {/* Header */}
               <div className="flex justify-between ">
                 <div className="flex items-center gap-2">
                   <MdOutlineKeyboardArrowLeft className="text-3xl" />
                   <h1 className="text-3xl">Notification</h1>
                 </div>
               
                  
                    <BsThreeDotsVertical className="text-3xl "></BsThreeDotsVertical>
                  
               
               </div>
               
             </div>
             <hr className="text-gray-200 my-5" />

             <div className="mx-3 md:mx-8 ">
              <div className="flex justify-between">
                <div>
                <h1 className="text-info-500 mb-3 text-2xl">Escrow Deposit Returned</h1>
                <p className="text-typo-500">Your escrow deposit of <span className="text-warning-500">$47.5 USD</span> for the swap <span className="text-typo-800">Branding & Identity for Web Development</span> has been successfully returned.   </p>
              </div>
              <div>12 hours ago</div>
              </div>
               <hr className="text-gray-300 my-5" />

              
             </div>
             <div className="mx-3 md:mx-8 ">
              <div className="flex justify-between">
                <div>
                <h1 className="text-success-500 mb-3 text-2xl">Swap Completed!</h1>
                <p>Your swap for Branding & Identity with Eric Yates has been marked as completed by both parties.   </p>
              </div>
              <div>13 hours ago</div>
              </div>
               <hr className="text-gray-200 my-5" />

              
             </div>
             <div className="mx-3 md:mx-8 ">
              <div className="flex justify-between">
                <div>
                <h1 className="text-blue-400 mb-3 text-2xl">Proposal Accepted</h1>
                <p>Great news! Eric Yates has accepted your swap proposal for Graphic Design.</p>
              </div>
              <div>15 hours ago</div>
              </div>
               <hr className="text-gray-200 my-5" />

              
             </div>
             <div className="mx-3 md:mx-8 ">
              <div className="flex justify-between">
                <div>
                <h1 className="text-info-500 mb-3 text-2xl">Swap Proposal Received</h1>
                <p>You've received a new swap proposal from Eric Yates for Web Development.  </p>
              </div>
              <div>14 hours ago</div>
              </div>
               <hr className="text-gray-200 my-5" />

              
             </div>
              


  </div>;
};

export default Notifications;
