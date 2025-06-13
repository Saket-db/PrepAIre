'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// import { UserButton } from '@clerk/nextjs'

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobTitle, setJobTitle] = useState();
    const [jobDescription, setJobDescription] = useState();  
    const [jobExperience, setJobExperience] = useState();

    const onSubmit = (event) => {
        // Handle form submission logic here
        event.preventDefault();
        console.log("Job Title:", jobTitle);
        console.log("Job Description:", jobDescription);
        console.log("Job Experience:", jobExperience);
    }

  return (
    <div>

        <div className='shadow-sm rounded-md p-10 flex flex-col items-center border border-gray-300 hover:shadow-md bg-gray-100 transition-all duration-300 cursor-pointer hover:scale-105'
        onClick={() => setOpenDialog(true)}>
            <h2 className='text-2xl font-bold'>+ Add New</h2>
        </div>
        <Dialog open = {openDialog}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                    <DialogTitle><h2 className='text-lg md:2xl font-bold'>Tell Us More About Your Interview</h2></DialogTitle>
                    <DialogDescription>
                        <form onSubmit={(onSubmit)}>

                        <div className='mt-2 mb-2 text-gray-800 px-2'>
                            <h2 className='text-md md:text-lg'>Add Details About The Job You Desire</h2>
                            
                            <div className='mt-3 my-2'>
                            <label>Job Title</label>
                            <Input placeholder="SDE-2" className="border-1" required
                            onChange={(event) => setJobTitle(event.target.value)}
                            ></Input>
                            </div>

                            <div className='mt-1'>
                            <label>Job Description</label>
                            <Textarea placeholder="Tell Us The Tech Stacks You Use" className="border-1" required
                            onChange={(event) => setJobDescription(event.target.value)}></Textarea>
                            </div>

                            <div className='mt-1'>
                            <label>Experience</label>
                            <Input placeholder="2" className="border-1" type="number" max = "45"required
                            onChange={(event) => setJobExperience(event.target.value)}></Input>
                            </div>


                        </div>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                        <div className='flex gap-5 justify-end mt-5'>
                            <Button type ="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                            <Button type ="submit" className="bg-blue-600 hover:bg-blue-700">Start Interview</Button>
                        </div>
                        </form>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewInterview
