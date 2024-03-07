import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import _ from 'lodash'
import cn from "classnames"
import { Link } from "react-router-dom"

type CoinType = {
    symbol: string,
    name: string,
    iconUrl: string,
    color: string,
    price: string
}

const SearchResults = ({ searchValue }: { searchValue: string }) => {
    const [results, setResults] = useState<CoinType[]>([])

    useEffect(() => {
        searchValue === '' && setResults([])
        debouncedSearch(searchValue)
    }, [searchValue])

    const debouncedSearch = useCallback(
        _.debounce((searchValue: string) => {
            if (searchValue.length > 0) {
                axios.get(`https://api.coinranking.com/v2/coins?search=${searchValue}`).then(data => {
                    let temp = data.data.data.coins.reduce((acc: CoinType[], cur: CoinType) => {
                        cur.price && acc.push({
                            symbol: cur.symbol,
                            name: cur.name,
                            iconUrl: cur.iconUrl,
                            color: cur.color,
                            price: cur.price
                        })

                        return acc
                    }, [])

                    setResults(temp)
                })
            }
        }, 500),
        []
    )

    return (
        searchValue.length > 0 ? <div className="absolute w-full max-h-[30rem] top-[100%] mt-6 py-2 rounded-md bg-white overflow-y-auto nice-scrollbar">
            {
                results.length > 0 ?
                    results.map((item: CoinType, index: number) => (
                        <Link to={`/symbols/${item.symbol}`} key={`symbol-${index}`}>
                            <div className={cn('flex px-4 py-2 items-center border-gray-100 hover:bg-gray-100 cursor-pointer', { 'border-b-[1px]': index < results.length - 1 })}>
                                <img src={item.iconUrl} width={30} height={30} alt="iconUrl" />

                                <h5 className="text-[14px] ml-3"><strong>{item.name}</strong></h5>

                                <p className="text-xs ml-auto">$ {parseFloat(item.price).toFixed(2)}</p>
                            </div>
                        </Link>
                    )) :
                    <div className="px-4 py-4 items-center border-gray-100">
                        No symbols match your search
                    </div>
            }
        </div>
            :
            <></>
    )
}

export default SearchResults