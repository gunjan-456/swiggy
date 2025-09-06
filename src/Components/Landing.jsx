import React from 'react'
import logoImg from "../assets/logo.webp"
import food from "../assets/food.avif"
import instamart from "../assets/instamart.avif"
import dineout from "../assets/dineout.avif"
import genie from "../assets/genie.avif"
import left from "../assets/left.avif"
import right from "../assets/right.avif"
import { useNavigate } from "react-router-dom"


const Landing = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-[#FF5200] min-h-[100vh] relative'>
        <nav className='flex justify-between p-6'>
            <img className='h-[48px]' src={logoImg} alt="" />


            <div className='flex items-center text-white gap-4'>
                <p>Swiggy Corporate</p>
                <p>Partner with us</p>
                <button className='border border-white rounded-lg py-3 px-6'>Get The App<i class="fa-solid fa-arrow-right fa-sm text-white ml-2" ></i></button>
                <button className='bg-black py-3 px-6 rounded-lg'>Sign In</button>
            </div>
        </nav>



        <div className="flex flex-col items-center gap-5 mt-30">
            <h1 className="text-white text-4xl leading-12 text-center">Order food & groceries. Discover <br />best restaurants. Swiggy it!</h1>
            
            <div className="h-[50px] w-[35vw]  relative">
                <input type="text" className="bg-white h-[100%] outline-none w-[100%] rounded px-4" placeholder="Search for restaurant, item or more"/>
                <i class="fa-solid fa-magnifying-glass absolute top-4 right-8"></i>
            </div>

            <div className="flex">
                <img onClick={() => {
                    navigate("/restaurants")
                }} className="h-[250px]" src={food} alt="" />
                <img onClick={() => {
                    navigate("/instamart")
                }} className="h-[250px]" src={instamart} alt="" />
                <img onClick={() => {
                    navigate("/dineout")
                }} className="h-[250px]" src={dineout} alt="" />
                <img onClick={() => {
                    navigate("/genie")
                }} className="h-[250px]" src={genie} alt="" />
            </div>
        </div>


        <img className="absolute top-20 h-[90vh]" src={left} alt="" />
        <img className="absolute top-20 h-[90vh] right-0" src={right} alt="" />
    </div>
  )
}

export default Landing
          