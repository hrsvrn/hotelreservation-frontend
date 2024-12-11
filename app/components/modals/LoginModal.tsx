'use client';
import Modal from "./Modal"
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
const LoginModal=()=>{
    const LoginModal=useLoginModal()
    const content=(<>
        <h2 className="mb-6 text-2xl"> Welcome to Airbnb, Please Login</h2>
        <form className="space-y-4">
            <input placeholder="Your email address goes here" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <input placeholder="Enter Your Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <div className="p-5 bg-airbnb  text-white rounded-xl opacity-80">Error Codes</div>
            <CustomButton
                label="Submit"
            />
        </form>
        </>
    )
    return(
        <Modal
        isOpen={LoginModal.isOpen}
        close={LoginModal.close}
        label="Login"
        content={content}

        />
    )
}
export default LoginModal;