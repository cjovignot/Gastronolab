import React, { useState, useEffect, useRef  } from 'react';

const AddModal = () => {

    const categories = [
        "Starter",
        "Meat dish",
        "Fish dish",
        "Vegetarian dish",
        "Sider",
        "Dessert",
        "Bevarage",
        "Healthy beverage"
    ]

    return (
        <>
            <label htmlFor="my_modal_6" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Share a new reciepe</h3>

                    <form action="submit">
                        <select className="select select-error w-full mt-6">
                            <option disabled selected>Choose your dish type...</option>
                            {categories.map((category, index) => (
                                <option
                                key={index}
                                className="py-2 px-4 bg-gray-100 hover:bg-gray-200"
                                style={{ borderRadius: '1rem' }}
                            >
                                {category}
                            </option>
                            ))}
                        </select>
                    </form>

                    <div className="modal-action flex justify-between">
                        <label htmlFor="my_modal_6" className="btn btn-outline hover:bg-red-800">Cancel</label>
                        <button className="btn btn-outline hover:bg-green-600">GO !</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddModal;