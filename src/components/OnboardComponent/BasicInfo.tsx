import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the default styles
import { FormData } from '../../types/multiFormType'; // Import FormData type

// Define the props interface for Step1BasicInfo
interface BasicInfoProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handlePhoneChange: (phone: string, country: any) => void;
    // Using keyof FormData for type safety on fieldName
    getErrorForField: (fieldName: keyof FormData) => string | undefined;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
    formData,
    handleChange,
    handlePhoneChange,
    getErrorForField,
}) => {
    const MAX_BIO_LENGTH = 400;

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Basic Information</h2>
            <p className="text-gray-600 mb-6">
                Let's start with some foundational details to help others know you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${getErrorForField('fullName') ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {getErrorForField('fullName') && (
                        <p className="mt-1 text-sm text-red-500">{getErrorForField('fullName')}</p>
                    )}
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <PhoneInput
                        country={'us'} // Default country
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        inputProps={{
                            id: 'phoneNumber',
                            name: 'phoneNumber',
                            required: true,
                            // Using !important to override react-phone-input-2's default styles
                            className: `!w-full !p-3 !border rounded-md focus:!ring-blue-500 focus:!border-blue-500 ${getErrorForField('phoneNumber') ? '!border-red-500' : '!border-gray-300'
                                }`,
                        }}
                        buttonStyle={{
                            borderRadius: '0.375rem 0 0 0.375rem',
                            borderColor: getErrorForField('phoneNumber') ? 'rgb(239 68 68)' : 'rgb(209 213 219)',
                            backgroundColor: '#f9fafb',
                            padding: '0 0.75rem',
                            marginRight: '0.5rem', // Added gap between flag and input
                        }}
                        dropdownStyle={{
                            borderRadius: '0.375rem',
                        }}
                        autoFormat={true}
                    />
                    {getErrorForField('phoneNumber') && (
                        <p className="mt-1 text-sm text-red-500">{getErrorForField('phoneNumber')}</p>
                    )}
                </div>

                {/* Location */}
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="NY, USA"
                            className={`w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10 ${getErrorForField('location') ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    {getErrorForField('location') && (
                        <p className="mt-1 text-sm text-red-500">{getErrorForField('location')}</p>
                    )}
                </div>
            </div>

            {/* Short Bio */}
            <div>
                <label htmlFor="shortBio" className="block text-sm font-medium text-gray-700 mb-1">
                    Short Bio
                </label>
                <textarea
                    id="shortBio"
                    value={formData.shortBio || ''} // Ensure it's a string for textarea
                    onChange={handleChange}
                    placeholder="(e.g., &quot;Freelance graphic designer passionate about sustainable design solutions.&quot;)"
                    rows={4}
                    className={`w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none ${getErrorForField('shortBio') ? 'border-red-500' : 'border-gray-300'
                        }`}
                    maxLength={MAX_BIO_LENGTH}
                ></textarea>
                <p className="mt-1 text-sm text-gray-500 text-right">
                    {MAX_BIO_LENGTH - (formData.shortBio?.length || 0)} characters left
                </p>
                {getErrorForField('shortBio') && (
                    <p className="mt-1 text-sm text-red-500">{getErrorForField('shortBio')}</p>
                )}
            </div>
        </div>
    );
};

export default BasicInfo;