import React, { ReactNode } from 'react';

export interface FormContainerProps {
    navbar?: ReactNode;
    container?: ReactNode;
    button?: ReactNode;
}
// TODO: Add responsiveness condition
const FormContainer = ({ navbar, container, button }: FormContainerProps) => {
    return (
        <div className='mx-auto flex flex-col gap-4 pb-4 min-h-screen'>
        <div className='bg-red-300'>
            {navbar}
        </div>
        <div className='flex flex-col gap-8 bg-blue-200 flex-grow overflow-auto'>
            {container}
        </div>
        <div className='flex justify-end bg-orange-200 mt-auto'>
            {button}
        </div>
    </div>
    );
}

export default FormContainer;


