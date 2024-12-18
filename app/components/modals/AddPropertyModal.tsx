"use client";
import Image from "next/image";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import { useState } from "react";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import Categories from "../addproperty/Components";
import CustomButton from "../forms/CustomButton";
const AddPropertyModal = () => {


  const AddPropertymodal = useAddPropertyModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('');
  const setCategory = (category: string) => {
    setDataCategory(category);  
  }
  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose category</h2>
          <Categories dataCategory={dataCategory} setCategory={setCategory}/>
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : (
        <p>Step 2</p>
      )}
    </>
  );
  return (
    <>
      <Modal
        isOpen={AddPropertymodal.isOpen}
        close={AddPropertymodal.close}
        label="Add property"
        content={content}
      />
    </>
  );
};
export default AddPropertyModal;
