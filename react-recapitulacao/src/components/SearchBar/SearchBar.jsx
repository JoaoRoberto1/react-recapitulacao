import { MagnifyingGlass } from 'phosphor-react' 

function SearchBar( {} ) {
    return (
        <>
            <div className='flex border border-[#6c63ff] items-center w-[750px] justify-between rounded-lg flex-1 p-1'>
              <input placeholder='Search note...' type="text" className='px-4 py-3 flex-1 rounded p-1 outline-none'/>
              <MagnifyingGlass size={32} />
            </div>
        </>
    )
}

export default SearchBar;