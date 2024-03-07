import { Reveal } from "react-awesome-reveal";
import { useAtom } from "jotai"
import { FaSearch } from "react-icons/fa";

import Layout from "./components/Layout"
import SearchBar from "./components/SearchBar"
import { showSearchAtom } from "./store"
import { fadeInDownShorter, fadeInRightShorter } from "./utils/keyframes";

const Home = () => {
  const [, setShowSearch] = useAtom(showSearchAtom)

  const showSearchBar = () => {
    setShowSearch(true)
  }

  return (
    <Layout>
      <div className="search-page flex w-full h-[100vh]">
        <SearchBar />

        <div className="flex m-auto flex-col items-center xl:max-w-[65rem] max-w-[90%]">
          <Reveal keyframes={fadeInDownShorter} delay={200} duration={1000}>
            <h1 className="font-semibold lg:text-3xl md:text-2xl text-xl text-white text-center leading-[1em] tracking-wide">
              #1 BCAS Symbol Assets Search
            </h1>
          </Reveal>

          <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}>
            <h4 className="mt-8 font-semibold md:text-lg text-md text-white text-center max-w-[50rem] tracking-wide">
              Experience the charts, tools, and trading ideas used by 50 million people globally.
            </h4>
          </Reveal>

          <div className="flex justify-center">
            <Reveal keyframes={fadeInRightShorter} delay={600} duration={1000} className="btn-search-wrapper relative mt-16 w-full rounded-[56px] text-gray md:max-w-[45rem] max-w-[80%] hover:text-white">
              <button className="btn-gradient md:px-8 md:py-6 px-6 py-4 text-md md:text-lg" onClick={showSearchBar}>
                <FaSearch className="mr-4 max-xs:hidden" />

                <span className="whitespace-nowrap text-ellipsis overflow-hidden">Search markets here</span>
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
