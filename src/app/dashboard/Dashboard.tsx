import FormContainer from '@/components/containers/FormContainer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import React from 'react';

const Dashboard = () => {
    return (
        <FormContainer
            navbar={
                <div className="flex mx-auto flex-col gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            NAVBAR
                        </Label>
                    </div>
                </div>
            }
            container={
                <div className="">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Name
                        </Label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className='text-white'>
                            Username
                        </Label>
                    </div> */}
                </div>
            }
            button={<Button size='full'>Edit Profile</Button>}


        />
    );
}

export default Dashboard;