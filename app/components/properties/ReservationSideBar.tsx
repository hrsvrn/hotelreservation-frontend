const ReservationSideBar=()=>{
    return(
        <aside className="p-6 pb-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">INR 20,000 per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select className="w-full -ml-1 text-xm">
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl">Book</div>
            <div className="mb-4 flex justify-between align-center">
                <p>20,000*4</p>
                
                <p>INR 80,000</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>AirBNB Fee</p>
                
                <p>INR 4,000</p>
            </div>
            <hr />
            <div className="py-4 flex justify-between align-center">
                <p>Total</p>
                
                <p>INR 84,000</p>
            </div>

        </aside>
    )
}
export default ReservationSideBar;