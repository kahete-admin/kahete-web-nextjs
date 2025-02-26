"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Step1 from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Button } from "../ui/button";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full text-white p-4">
      <div className="flex items-center mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-xl font-normal ml-4">
          Step {currentStep} of {totalSteps}
        </h2>
      </div>

      <div className="flex items-center gap-4 px-1">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full
              ${index + 1 <= currentStep ? "bg-white" : "bg-gray-600"}`}
          />
        ))}
      </div>

      <div className="mt-8">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          onClick={nextStep}
          disabled={currentStep === totalSteps}
          size="full"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};


export default Stepper;
