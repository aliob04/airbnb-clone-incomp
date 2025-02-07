"use client"
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className='
    border-[1px] 
    w-full 
    md:w-auto py-2 
    rounded-full 
    shadow-sm 
    hover:shadow-md 
    transition 
    cursor-pointer
    '>
       {/*open flex */}
      <div className="
      flex
      flex-row
      items-center
      justify-between">
        {/* first item in the flex */}
        <div className="
        text-sm 
        font-semibold
        px-6
        ">
            Anywhere
        </div>
        {/* second item in the flex */}
        <div className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-l-[1px]
        flex-1 
        text-center
        ">
            AnyWeek
        </div>
        {/* third item in the flex*/}
        <div className="
        text-sm
        pl-6
        pr-2
        text-gray-600
        flex
        flex-row
        items-center
        gap-3
        ">
            <div className="
            hidden 
            sm:block
            ">
                Add Guest
                
            </div>
            <div className="
                p-2
                rounded-full
                bg-rose-500
                text-white
                ">
                    <BiSearch size={18}/>
                </div>
        </div>
        {/* close flex*/}
      </div>
    </div>
  )
}

export default Search
