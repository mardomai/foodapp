import React, { useState } from 'react';
import Filter from '../media/Filter.png'
import Arrow from '../media/Arrow - Right.png'
import Shrimp from '../media/shrimp1.png'
import Star from '../media/Star.png'
import Stopwatch from '../media/stopwatch.png'
import Shrimp2 from '../media/shrimp2.png'
import Bell from '../media/bell.png'
import Category from '../media/Category.png'
import Heart from '../media/Heart.png'
import Buy from '../media/Buy.png'
import Mc from '../media/mastercard.png'
import Burger from '../media/burger.png'
import Park from '../media/parking.png'
import Plane from '../media/plane.png'
import Shampoo from '../media/shampoo.png'
import { Link } from 'react-router-dom'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    return (
        <div className='bg-black'>
            <nav className="p-4">
                <div className="flex items-center">
                <button
                    className="text-white block lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {isOpen ? (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                    </svg>
                </button>
                <div
                    className={`${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:hidden fixed top-0 left-0 h-full bg-gray-900 w-28 z-50 transition duration-300 ease-in-out transform`}
                >
                    <button
                    onClick={closeMenu}
                    className="text-white block mt-4 ml-2 lg:hidden focus:outline-none"
                    >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    </button>
                    <div className="text-sm pt-8">
                        <a href="#" className="flex justify-center mt-20">
                            <img src={Mc} alt="Mastercard" />
                        </a>
                        <a href="#" className="flex justify-center mt-7">
                            <img src={Buy} alt="Cart" />
                        </a>
                        <a href="#" className="flex justify-center mt-7">
                            <img src={Park} alt="Parking" />
                        </a>
                        <a href="#" className="flex justify-center mt-7">
                            <img src={Burger} alt="Burger" />
                        </a>
                        <a href="#" className="flex justify-center mt-7">
                            <img src={Plane} alt="Plane" />
                        </a>
                        <a href="#" className="flex justify-center mt-7">
                            <img src={Shampoo} alt="Shampoo" />
                        </a>
                    </div>
                </div>
                </div>
            </nav>
            <div className='flex flex-row justify-between pt-[10px]'>
                <div>
                    <p className='text-gray-500 text-lg'>Good morning</p>
                    <p className='text-white text-xl'>Foo Fighters</p>
                </div>
                <p className='text-4xl'>🍔</p>
            </div>    
            <div className='px-[5px] pb-[15px]'>
                <div className='bg-gray-600 rounded-lg flex flex-row justify-between p-[20px]'>
                    <p className='text-gray-400'>Find your dishes</p>
                    <img src={Filter} alt="Filter" />
                </div>
            </div>
            <div className='flex justify-between pt-[15px] pb-[20px]'>
                <h1 className='text-white text-3xl'>Categories</h1>
                <div className='flex flex-row'>
                    <p className='text-white'>All</p>
                    <img className='h-[30px]' src={Arrow} alt="Arrow Right" />
                </div>
            </div>
            <div className='flex flex-row gap-5 px-[5px]'>
                <div className='bg-gray-600 h-[50px] w-[90px] flex flex-row place-content-center place-items-center rounded-lg'>
                    <p>🍔</p>
                    <p className='text-gray-400'>Burger</p>
                </div>
                <div className='bg-gray-600 h-[50px] w-[110px] flex flex-row place-content-center place-items-center rounded-lg'>
                    <p>🌭</p>
                    <p className='text-gray-400'>Sandwich</p>
                </div>
            </div>
            <div className='flex justify-between pt-[50px] pb-[20px]'>
                <h1 className='text-white text-3xl'>New dishes</h1>
                <div className='flex flex-row'>
                    <p className='text-white'>All</p>
                    <img className='h-[30px]' src={Arrow} alt="Arrow Right" />
                </div>
            </div>
            <div className='flex justify-between px-2'>
                <Link to='/dish'>
                    <div className='bg-gray-600 flex flex-col w-[175px] rounded-lg'>
                        <div className='flex place-content-center pt-1'>
                            <img className='h-[150px] w-[150px]' src={Shrimp} alt="Shrimp 1" />
                        </div>    
                        <h2 className='text-white flex place-content-center pt-3'>Fried Shrimp</h2>
                        <div className='flex place-content-center gap-2'>
                            <div className='flex text-gray-500'>
                                <img className='h-4' src={Star} alt="Star" />
                                <p>4.8(163)</p>
                            </div>
                            <div className='flex text-gray-500'>
                                <img className='h-4' src={Stopwatch} alt="Stopwatch" />
                                <p>20 min</p>
                            </div>
                        </div>
                        <h2 className='text-[#FF7269] flex place-content-center py-1'>€29.00</h2>
                    </div>
                </Link>
                <div className='bg-gray-600 flex flex-col w-[175px] rounded-lg'>
                    <Link to='/dish2'>
                        <div className='flex place-content-center pt-2'>
                            <img className='h-[140px] w-[140px]' src={Shrimp2} alt="Shrimp 2" />
                        </div>    
                        <h2 className='text-white flex place-content-center pt-3'>Fried Shrimp</h2>
                        <div className='flex place-content-center gap-2'>
                            <div className='flex text-gray-500'>
                                <img className='h-4' src={Star} alt="Star" />
                                <p>4.8(163)</p>
                            </div>
                            <div className='flex text-gray-500'>
                                <img className='h-4' src={Stopwatch} alt="Stopwatch" />
                                <p>20 min</p>
                            </div>
                        </div>
                    </Link>
                    <h2 className='text-[#FF7269] flex place-content-center py-2'>€29.00</h2>
                </div>
            </div>
            <div className='flex place-content-center pt-[80px] pb-[55px] gap-16'>
                <img src={Bell} alt="Bell" />
                <img src={Category} alt="Category" />
                <img src={Heart} alt="Heart" />
                <img src={Buy} alt="Buy" />
            </div>
        </div>
    )
}

export default Main