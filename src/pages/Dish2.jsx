import React from 'react'
import Arrow from '../media/Arrow - Left 2.png'
import Heart from '../media/Heart.png'
import Leaves from '../media/leaves.png'
import Star from '../media/Star.png'
import Stopwatch from '../media/stopwatch.png'
import Fire from '../media/Fire.png'
import Broccoli from '../media/broccoli.png'
import Chilli from '../media/chilli.png'
import Corn from '../media/corn.png'
import Carrot from '../media/carrot.png'
import { Link } from 'react-router-dom'
import NewShrimp from '../media/newshrimp.png'

const Dish2 = () => {
    return(
        <div className='bg-black h-[850px]'>
            <div className='p-3 flex justify-between'>
                <Link to='/'>
                    <img src={Arrow} alt="Left arrow" />
                </Link>
                <img src={Heart} alt="Heart" />
            </div>
            <div className='flex place-content-center'>
                <img src={Leaves} alt="Leaves" />
                <img className='absolute py-10 w-96' src={NewShrimp} alt="Second Shrimp" />
            </div>
            <div className='pt-36'>
                <h1 className='text-white text-3xl text-center'>Fried Shrimp</h1>
                <p className='text-gray-500 text-lg text-center'>This is my kind of breakfast egg sandwich and it takes under 5 minutes to make</p>
            </div>
            <div className='flex place-content-center gap-5 pt-5'>
                <div className='flex gap-2'>
                    <img className='h-6' src={Star} alt="Star" />
                    <p className='text-lg text-gray-500'>4.8(163)</p>
                </div>
                <div className='flex gap-2'>
                    <img className='h-6' src={Stopwatch} alt="Stopwatch" />
                    <p className='text-lg text-gray-500'>20 min</p>
                </div>
                <div className='flex gap-2'>
                    <img className='h-6' src={Fire} alt="Flame" />
                    <p className='text-lg text-gray-500'>150 kcal</p>
                </div>
            </div>
            <div className='flex px-[50px] justify-between pt-8 pb-5'>
                <h2 className='text-white text-xl'>Ingredients</h2>
                <p className='text-gray-500 text-lg'>7 item</p>
            </div>
            <div className='flex place-content-center gap-2 '>
                <div className='bg-slate-800 w-[85px] h-36 rounded-2xl'>
                    <img src={Broccoli} alt="Broccoli" className='px-4 py-3' />
                    <p className='text-white text-lg text-center'>Broccoli</p>
                </div>
                <div className='bg-slate-800 w-[85px] h-36 rounded-2xl'>
                    <img src={Chilli} alt="Chilli" className='px-4 py-3' />
                    <p className='text-white text-lg text-center'>Chilli</p>
                </div>
                <div className='bg-slate-800 w-[85px] h-36 rounded-2xl'>
                    <img src={Corn} alt="Corn" className='px-4 py-3' />
                    <p className='text-white text-lg text-center'>Corn</p>
                </div>
                <div className='bg-slate-800 w-[85px] h-36 rounded-2xl'>
                    <img src={Carrot} alt="Carrot" className='px-4 py-3' />
                    <p className='text-white text-lg text-center'>Carrot</p>
                </div>
            </div>
            <div className='pt-3'>
                <h2 className='text-gray-500 text-lg text-center'>Price</h2>
                <h1 className='text-[#FF7269] text-3xl text-center'>€29.00</h1>
            </div>
        </div>
    )
}

export default Dish2