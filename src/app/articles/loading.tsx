
function Loading() {
    return (
        <section className='container px-5 m-auto animate-pulse'>
            <div className='my-5 w-full md:w-2/3 m-auto bg-gray-300 h-15 rounded'></div>
            <div className="flex flex-wrap justify-between items-center gap-7">
                {[1,2,3,4,5,6].map((_, indx) => (
                    <div key={indx} className="my-1 p-5 w-full md:w-2/5 lg:w-1/4 rounded-lg shadow-lg ">
                        <h3 className="h-6 bg-gray-300"></h3>
                        <p className="my-5 h-10 bg-gray-300 p-1"></p>
                        <div className="h-6 bg-gray-600 p-1 rounded-lg">
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Loading