"use client"

import { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);


  return (
    <>
    {isOpen && 
    <div className="flex flex-col p-4 w-60 bg-gray-500">
        <div className="flex">
          <button className="flex-2">Home</button>
          <button className="flex-2">Code</button>
        </div>
        <div className="flex flex-col gap-4">
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
      </div>

      <div>
        <p>Pinned ^</p>
      </div>

      <div>
        <p>Chat History ^</p>
      </div>

      <div className="flex flex-1 items-end">
        <p>Leon</p>
      </div>
      </div>
}
      <button className="" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      </>
  )
}