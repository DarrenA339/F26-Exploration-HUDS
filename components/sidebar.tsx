"use client"

import {useState} from "react"

export default function Sidebar() {
    const [isOpen, setOpen] = useState(true);

    return (
    <>
    {isOpen &&
    <div className="flex flex-col p-4 w-60 bg-gray-500">
      <div className="flex">
        <button className="flex-1 p-1 border border-black">Home</button>
        <button className="flex-1 p-1 border border-black">Code</button>
      </div>
      <div className="flex flex-col gap-2">
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
        <p>New</p>
      </div>

      <div className="mt-5">
        <p>Pinned v</p>
        <p>Chat History v</p>
      </div>

      <div className="flex flex-1 items-end">
        <p>Logan</p>
      </div>
    </div>
}

    <button className="self-start p-2 mt-5 border border-black" onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
    </button>
    </>
  )
}
