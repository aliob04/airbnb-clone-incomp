"use client"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback, useState } from "react"
import MenuItem from "./MenuItem"

const UserMenu = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])


  return (
    <div className="
    relative
    ">
        
        <div className="
        flex
        flex-row
        items-center
        gap-3
        ">
            <div 
                onClick ={null}
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                transition
                hover:bg-neutral-100
                cursor-pointer
            ">
                Airbnb your home
            </div>
            <div 
                onClick ={toggleOpen} 
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "> 
                <AiOutlineMenu />
                <div className="
                hidden
                md:block

                ">
                    <Avatar />
                </div>
            </div>
        </div>
        {isOpen && (
            <div 
                className="
                absolute 
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm         
            ">
                <div 
                    className="
                    flex 
                    flex-col 
                    cursor-pointer
                ">
                    <>
                        <MenuItem onClick={null} label="Login"/>
                        <MenuItem onClick={null} label="Sing up"/>
                    </>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu
