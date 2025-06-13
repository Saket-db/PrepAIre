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

// import { UserButton } from '@clerk/nextjs'

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false);


  return (
    <div>

        <div className='shadow-sm rounded-md p-10 flex flex-col items-center border border-gray-300 hover:shadow-md bg-gray-100 transition-all duration-300 cursor-pointer hover:scale-105'
        onClick={() => setOpenDialog(true)}>
            <h2 className='text-2xl font-bold'>+ Add New</h2>
        </div>
        <Dialog open = {openDialog}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                        <div className='flex gap-5 justify-end mt-5'>
                            <Button variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                            <Button>Start Interview</Button>
                        </div>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddNewInterview
