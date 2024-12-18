'use client'
import useLoginModal from "@/app/hooks/useLoginModal";
import LoginModal from "../modals/LoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps{
    userId?:string | null;

}

const AddPropertyButton: React.FC<AddPropertyButtonProps>=({
    userId
})=>{
    const loginModal=useLoginModal();
    const AddPropertyModal=useAddPropertyModal();
    const airbnbyourhome=()=>{
        if(userId){
        AddPropertyModal.open();
        }
        else{
            loginModal.open();
        }
    }
    return(
        <div
            onClick={airbnbyourhome} 
            className="p-2 text-sm font-semibold rounded-full hover:bg-gray-200">
            Airbnb your home
        </div>
    )
}
export default AddPropertyButton;