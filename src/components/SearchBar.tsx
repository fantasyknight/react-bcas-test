import { useAtom } from "jotai"
import { useState } from "react"
import cn from "classnames"

import { showSearchAtom } from "../store"
import SearchResults from "../components/SearchResults"

const SearchBar = () => {
    const [showSearch, setShowSearch] = useAtom(showSearchAtom)
    const [searchValue, setSearchValue] = useState<string>('')

    const hideSearch = () => {
        setSearchValue('')
        setShowSearch(false)
    }

    const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <div className={cn(`flex fixed top-0 left-0 right-0 pt-10 z-[10] -translate-y-full transition-all`, { 'translate-y-0': showSearch })}>
                <div className="relative mx-auto w-full max-w-[800px] text-sm z-[9]">
                    <input className="w-full p-4 pl-8 bg-gray-100 rounded-[2rem] focus-visible:outline-none" type="text" placeholder="Symbol" onChange={changeSearchValue} value={searchValue} />

                    <SearchResults searchValue={searchValue} />
                </div>
            </div>

            {showSearch && <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-85 z-[8]" onClick={hideSearch}></div>}
        </>
    )
}

export default SearchBar

