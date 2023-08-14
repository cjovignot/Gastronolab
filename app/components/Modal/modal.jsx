const Modal = ({props}) => {

    return (
        <>
            <dialog id="my_modal_1" className="modal text-black">
                <form method="dialog" className="modal-box glass">
                    <h3 className="font-bold text-2xl text-center text-white">LOGIN</h3>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="divider -mb-1"></div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="modal-action flex justify-between mt-10">
                    {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-error">Close</button>
                        <button className="btn btn-success">Login</button>
                    </div>
                </form>
            </dialog>

            
            <dialog id="my_modal_2" className="modal text-black">
                <form method="dialog" className="modal-box glass">
                    <h3 className="font-bold text-2xl text-center text-white">SIGN UP</h3>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="divider -mb-1"></div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Password confirmation</span>
                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div className="modal-action flex justify-between mt-10">
                    {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-error">Close</button>
                        <button className="btn btn-success">Sign Up</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default Modal;