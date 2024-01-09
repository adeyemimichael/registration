'use client';
import { useState } from 'react';
import { Button,  Label, TextInput } from 'flowbite-react';
import axios from "axios";
import Success from './Success';

export default function MainLink() {


  const [email, SetEmail] = useState(" ");
  const [Fullname , SetUsername] = useState(" ");
  const [gender, SetGender] = useState(" ");
  const [Phonenumber, SetPhonenumber] = useState(" ");
  const [techRole, setTechRole] = useState('');
  const [location, setLocation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const resetForm = () => {
    SetEmail("");
    SetUsername("");
    SetGender("");
    SetPhonenumber("");
    setTechRole('');
    setLocation('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      email: email,
      name: Fullname,
      gender: gender,
      Phonenumber: Phonenumber,
      techRole: techRole,
      location: location,
    };

    axios.post(
      "https://sheet.best/api/sheets/92f91a00-c765-4729-8a5d-d1b9513c2796",
      Data
    )
    .then((response) => {
      console.log(response);
      setShowSuccess(true);
      resetForm();
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000); // 4 seconds in milliseconds
    });
  };
 
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#f6f6f6]'>
      
    <form className="flex md:w-[50%] flex-col gap-4 bg-gray-100 p-6 font-brico  md:h-screen  rounded-lg mb-6 mt-6 scroll-smooth hover:scroll-auto" onSubmit={handleSubmit}>
    <h1 className='md:font-normal font-medium font-brico  md:text-[35px] text-[30px] text-black text-center  tracking-tight leading-relaxed mt-2'>Get your Ticket here &#x2705;</h1>

      <div>
        <div className="mb-2 block mt-2">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@mail.com"
          required
          shadow
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          type="email"
       className='border-2 border-stone-950 font-brico rounded-xl'
        />
      </div>
      <div>
        <div className="mb-2 block mt-2">
          <Label
            htmlFor="fullname "
            value="Fullname "
          />
        </div>
        <TextInput
          id="name"
          placeholder="Andrew John"
        required
          shadow
          onChange={(e) => SetUsername(e.target.value)}
          value={Fullname }
          type="text"
          className='border-2 border-stone-950 rounded-xl font-brico' 
        />
      </div>
      <div>
  <div className="mb-2 block mt-2">
    <Label
      htmlFor="Gender"
      value="Gender"
    />
  </div>
  <select
    id="gender"
    required
    
    onChange={(e) => SetGender(e.target.value)}
    value={gender}
    className='border-2 border-stone-950 rounded-xl font-brico'
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>
<div>
          <div className="mb-2 block mt-2">
            <Label htmlFor="techRole" value="Your Tech Role" />
          </div>
          <select
            id="techRole"
            required
            onChange={(e) => setTechRole(e.target.value)}
            value={techRole}
            className="border-2 border-stone-950 rounded-xl font-brico"
          >
            <option value="">Select Tech Role</option>
            <option value="Student">Student</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="devOpsEngineer">DevOps Engineer</option>
            <option value="Techpreneur">Techpreneur</option>
            <option value="Designer">Product Designer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Marketing"> Digital Marketing</option>
            <option value="writer">  Technical Writer</option>
            <option value="Startup ">Startup Founder</option>
    <option value="dataAnalyst">Data Analyst</option>
    <option value="other">Other</option>
            {/* Add more options based on available tech roles */}
         
 
          </select>
        </div>

      <div className="gap-2 mt-2">
       <div className='mb-2 block'>
        <Label
          className="flex"
          htmlFor="phone no"
          value='Phone number'
        >
        </Label>
        </div>
        <TextInput
          id="phone number "
          placeholder='0810000000'
          required
          shadow
          type="number"
          onChange={(e) => SetPhonenumber(e.target.value)}
            value={Phonenumber}
            className='border-2 font-brico border-stone-950 rounded-xl'
        />
      </div>
      <div>
        <div className="mb-2 block mt-2">
          <Label
            htmlFor="location "
            value="location"
          />
        </div>
        <TextInput
          id="location"
          placeholder="Ilorin, Kwara state Nigeria"
        required
          shadow
          onChange={(e) => setLocation(e.target.value)}
          value={location }
          type="text"
          className='border-2 border-stone-950 rounded-xl font-brico' 
        />
      </div>
      <Button type="submit" className='bg-[#000038] text-center font-brico mt-4' >
    Sign Up
      </Button>
    </form>
    {showSuccess && <Success/>}
    </div>
  )
}


