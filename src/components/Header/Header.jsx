/* eslint-disable react/no-unknown-property */
const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center  p-4 bg-gray-300 rounded gap-4">
             <h1 className='text-2xl font-bold'>Course Registration</h1>
            <div className="flex justify-center items-center gap-4">
                <input className="p-2 border-2 rounded" type="text" placeholder="Search Courses"/>
                <button className="bg-purple-400 p-2 rounded">Search</button>
            </div>
        </header>
    );
};

export default Header;