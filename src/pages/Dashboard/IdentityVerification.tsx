import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
  country: string;
  state: string;
  zip: string;
  address: string;
  photo?: FileList;
  passport?: FileList;
  agree: boolean;
};

const IdentityVerification = () => {
  const [photoName, setPhotoName] = useState('Upload Photo');
  const [passportName, setPassportName] = useState('Passport/Driving License');
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setValue,
    watch
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);

    if (data) {
      navigate('success');
    }
  };


  const phone = watch('phone');

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
        <div className="flex items-center gap-x-3">
          <span className="text-xl md:text-2xl"><IoIosArrowBack /></span>
          <span className="text-lg md:text-2xl font-bold">Identity Verification</span>
        </div>
        <div>
          <button className="bg-gray-100 px-4 py-2 rounded-md border border-gray-300 font-bold text-sm md:text-base w-full md:w-auto">
            Save Draft
          </button>
        </div>
      </div>

      <hr className='text-gray-200 mb-5' />
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            {...register('firstName', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            {...register('dob', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
          <PhoneInput
            country={'us'}
            enableSearch
            value={phone}
            onChange={(value: string) => setValue('phone', value)}
            inputClass="!w-full !pl-14 !pr-4 !py-2.5 !border !border-gray-300 !rounded-[12px] !text-sm sm:!text-base focus:!outline-none focus:!ring-2 focus:!ring-indigo-500 focus:!border-indigo-500 transition !duration-200"
            inputProps={{
              name: 'phone',
              required: true,
            }}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Country</label>
          <select
            {...register('country', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select Country</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">State / Province</label>
          <select
            {...register('state', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select State</option>
            <option>Dhaka</option>
            <option>Delhi</option>
            <option>California</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">ZIP Code</label>
          <select
            {...register('zip', { required: true })}
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            <option value="">Select ZIP</option>
            <option>1207</option>
            <option>10001</option>
            <option>110001</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            {...register('address', { required: true })}
            placeholder="Road / Flat Name"
            className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-[12px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">Photo</label>

          <div className="inline-flex items-center border border-gray-300 rounded-[12px] px-3 py-2.5">
            <label
              htmlFor="photo"
              className="bg-[#E5E7EB] hover:bg-gray-300 text-black text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition duration-200"
            >
              {photoName}
            </label>
            <input
              type="file"
              id="photo"
              accept="image/png, image/jpeg"
              {...register('photo')}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setPhotoName(file.name);
              }}
              className="hidden"
            />
          </div>

          <span className="text-sm text-gray-500 mt-2 ml-3">JPG, PNG, Max 2MB</span>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">Passport/Driving License</label>
          <div className="inline-flex items-center border border-gray-300 rounded-[12px] px-3 py-2.5">
            <label
              htmlFor="passport"
              className="bg-[#E5E7EB] hover:bg-gray-300 text-black text-sm font-medium px-3 py-2 rounded-md cursor-pointer transition duration-200"
            >
              {passportName}
            </label>
            <input
              type="file"
              id="passport"
              accept="image/png, image/jpeg"
              {...register('passport')}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setPassportName(file.name);
              }}
              className="hidden"
            />
          </div>
          <span className="text-sm text-gray-500 mt-2 ml-3">JPG, PNG, Max 2MB</span>
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <input
            type="checkbox"
            id="agree"
            {...register('agree', { required: true })}
            className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded-[4px] focus:ring-indigo-500 bg-[#D2D6DB]"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            By signing up or logging in, I accept the SwapSpot’s Terms of Service and Privacy Policy
          </label>
        </div>
      </form>

      <hr className="mt-10 text-gray-200" />
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white 
             text-sm sm:text-base font-medium 
             px-6 py-2 sm:px-8 sm:py-3 md:px-[46px] md:py-[12px] 
             rounded-md shadow-sm transition duration-200 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default IdentityVerification;
