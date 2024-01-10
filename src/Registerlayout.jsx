import { Outlet } from "react-router-dom"
import Navbar from './Navbar';

const Registerlayout = () => {
  return (
    
    <div>
      <Navbar/>
      <div className="text-black font-bold md:flex flex-col  justify-center items-center mt-[70px]">
  <div className="flex flex-col justify-center items-center">
   <h1 className="font-medium text-center md:text-[60px]  text-[20px] font-brico "> Get your Ticket</h1>
   <div className="flex flex-col md:flex-row md:justify-center md:items-center items-center bg-[#973AE0] text-center hover:bg-[#b173e1]  pt-4 pb-4 pl-6 pr-6 md:w-[255px] w-[150px] md:h-[80px]  h-[40px] ml-auto mr-auto cursor-pointer ">
   <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.04395 16.6124V7.44572C4.04395 6.52525 4.79015 5.77905 5.71061 5.77905H35.7106C36.6311 5.77905 37.3773 6.52525 37.3773 7.44572V16.6124C35.0761 16.6124 33.2106 18.4779 33.2106 20.7791C33.2106 23.0802 35.0761 24.9457 37.3773 24.9457V34.1124C37.3773 35.0329 36.6311 35.7791 35.7106 35.7791H5.71061C4.79015 35.7791 4.04395 35.0329 4.04395 34.1124V24.9457C6.34513 24.9457 8.21061 23.0802 8.21061 20.7791C8.21061 18.4779 6.34513 16.6124 4.04395 16.6124ZM24.044 9.11239H7.37728V14.0587C9.84681 15.2859 11.5439 17.8342 11.5439 20.7791C11.5439 23.7239 9.84681 26.2722 7.37728 27.4994V32.4457H24.044V9.11239ZM27.3773 9.11239V32.4457H34.044V27.4994C31.5745 26.2722 29.8773 23.7239 29.8773 20.7791C29.8773 17.8342 31.5745 15.2859 34.044 14.0587V9.11239H27.3773Z" fill="#E0C4F6"/>
</svg>
<p className="text-[#fff] hover:text-[#f7f0f0]  font-brico text-center items-center md:text-[32px] font-semibold p-1 "> <a href="https://bit.ly/3H9xpn6">its free! </a></p>
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.04395 16.6124V7.44572C4.04395 6.52525 4.79015 5.77905 5.71061 5.77905H35.7106C36.6311 5.77905 37.3773 6.52525 37.3773 7.44572V16.6124C35.0761 16.6124 33.2106 18.4779 33.2106 20.7791C33.2106 23.0802 35.0761 24.9457 37.3773 24.9457V34.1124C37.3773 35.0329 36.6311 35.7791 35.7106 35.7791H5.71061C4.79015 35.7791 4.04395 35.0329 4.04395 34.1124V24.9457C6.34513 24.9457 8.21061 23.0802 8.21061 20.7791C8.21061 18.4779 6.34513 16.6124 4.04395 16.6124ZM24.044 9.11239H7.37728V14.0587C9.84681 15.2859 11.5439 17.8342 11.5439 20.7791C11.5439 23.7239 9.84681 26.2722 7.37728 27.4994V32.4457H24.044V9.11239ZM27.3773 9.11239V32.4457H34.044V27.4994C31.5745 26.2722 29.8773 23.7239 29.8773 20.7791C29.8773 17.8342 31.5745 15.2859 34.044 14.0587V9.11239H27.3773Z" fill="#E0C4F6"/>
</svg>
   </div>

   </div>
   
    </div>
      <Outlet/>
    </div>
  )
}

export default Registerlayout