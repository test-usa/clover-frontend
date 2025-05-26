// const OnBoard = () => {
//   return <div>OnBoard</div>;
// };

// export default OnBoard;




import React, { useState, useEffect, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the default styles for react-phone-input-2
import { z } from 'zod'; // Import Zod for schema validation



// Define the schema for basic information (Step 1)
const basicInfoSchema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  phoneNumber: z.string().min(5, { message: 'Phone Number is required and should be valid' }), // react-phone-input-2 handles international validity, so a minimum length check is practical here.
  location: z.string().min(1, { message: 'Location is required' }),
  shortBio: z.string().max(400, { message: 'Short Bio cannot exceed 400 characters' }).optional().or(z.literal('')),
});

// Define the schema for talents (Step 2)
const talentsSchema = z.object({
  skillsOffered: z.array(z.string()).min(1, { message: 'Please add at least one skill you offer' }),
});

// Define the schema for desired skills (Step 3)
const wantedSkillsSchema = z.object({
  skillsWanted: z.array(z.string()).min(1, { message: 'Please add at least one skill you want' }),
});

// Define the schema for the final step (Step 4)
const almostThereSchema = z.object({
  profilePhoto: z.any().optional(), // File object is not directly validated by Zod for type, handled by custom logic.
  portfolioUrl: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
});

// Combine all schemas into a single main form schema
const multiStepFormSchema = z.intersection(
  basicInfoSchema,
  z.intersection(
    talentsSchema,
    z.intersection(
      wantedSkillsSchema,
      almostThereSchema
    )
  )
);

// Define the TypeScript type from the combined Zod schema
type FormData = z.infer<typeof multiStepFormSchema>;

const initialFormData: FormData = {
  fullName: '',
  phoneNumber: '',
  location: '',
  shortBio: '',
  skillsOffered: [],
  skillsWanted: [],
  profilePhoto: null,
  portfolioUrl: '',
};

// --- Main MultiStepForm Component ---

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Based on screenshots
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(null);
  const [currentSkillTag, setCurrentSkillTag] = useState(''); // For skills input

  // --- Step Navigation Functions ---
  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  // const isLastStep = currentStep === totalSteps;

  // --- Form Data Handlers ---

  // Generic handler for text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for the field being edited
    setErrors((prev) => prev.filter(err => err.path[0] !== id));
  };

  // Handler for PhoneInput component
  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber: phone }));
    // Clear phone number error
    setErrors((prev) => prev.filter(err => err.path[0] !== 'phoneNumber'));
  };

  // Handler for adding skill tags
  const addSkillTag = (type: 'skillsOffered' | 'skillsWanted') => {
    const trimmedTag = currentSkillTag.trim();
    if (trimmedTag && !formData[type].includes(trimmedTag)) {
      setFormData((prev) => ({
        ...prev,
        [type]: [...prev[type], trimmedTag],
      }));
      setCurrentSkillTag('');
      // Clear error for the skills array
      setErrors((prev) => prev.filter(err => err.path[0] !== type));
    }
  };

  // Handler for removing skill tags
  const removeSkillTag = (type: 'skillsOffered' | 'skillsWanted', tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((tag) => tag !== tagToRemove),
    }));
  };

  // Keyboard handler for skill tags (Enter to add, Backspace to remove last)
  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: 'skillsOffered' | 'skillsWanted') => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkillTag(type);
    } else if (e.key === 'Backspace' && currentSkillTag === '') {
      const currentSkills = formData[type];
      if (currentSkills.length > 0) {
        const newSkills = [...currentSkills];
        newSkills.pop();
        setFormData((prev) => ({ ...prev, [type]: newSkills }));
      }
    }
  };

  // Handler for profile photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert("File size exceeds 2MB limit.");
        setFormData((prev) => ({ ...prev, profilePhoto: null }));
        setProfilePhotoPreview(null);
        return;
      }
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, profilePhoto: null }));
      setProfilePhotoPreview(null);
    }
    // Clear error for profilePhoto (if any previous validation was done)
    setErrors((prev) => prev.filter(err => err.path[0] !== 'profilePhoto'));
  };

  // Effect to update photo preview if formData.profilePhoto changes
  useEffect(() => {
    if (formData.profilePhoto && typeof formData.profilePhoto === 'object') { // Ensure it's a File object
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(formData.profilePhoto as File);
    } else {
      setProfilePhotoPreview(null);
    }
  }, [formData.profilePhoto]);


  // --- Validation and Step Progression ---

  const handleNextStep = () => {
    let schemaToValidate;
    let dataToValidate;

    // Select schema and data based on the current step
    switch (currentStep) {
      case 1:
        schemaToValidate = basicInfoSchema;
        dataToValidate = {
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          location: formData.location,
          shortBio: formData.shortBio,
        };
        break;
      case 2:
        schemaToValidate = talentsSchema;
        dataToValidate = { skillsOffered: formData.skillsOffered };
        break;
      case 3:
        schemaToValidate = wantedSkillsSchema;
        dataToValidate = { skillsWanted: formData.skillsWanted };
        break;
      case 4:
        schemaToValidate = almostThereSchema;
        dataToValidate = {
          profilePhoto: formData.profilePhoto,
          portfolioUrl: formData.portfolioUrl,
        };
        break;
      default:
        return;
    }

    const result = schemaToValidate.safeParse(dataToValidate);

    if (!result.success) {
      setErrors(result.error.issues);
      return;
    }

    setErrors([]); // Clear errors if validation passes
    if (currentStep < totalSteps) {
      nextStep();
    } else {
      // This is the final step, handle submission
      handleSubmit();
    }
  };

  const getErrorForField = (fieldName: string) => {
    return errors.find(err => err.path[0] === fieldName)?.message;
  };

  // --- Final Submission ---
  const handleSubmit = () => {
    // Perform a final validation of the entire form data
    const finalResult = multiStepFormSchema.safeParse(formData);

    if (!finalResult.success) {
      console.error("Final form validation failed:", finalResult.error.issues);
      setErrors(finalResult.error.issues);
      alert('Please correct the errors before submitting.');
      // Optionally, navigate back to the first step with errors
      setCurrentStep(1); // Or to the step where the first error occurs
      return;
    }

    // If validation passes, you can now process formData (e.g., send to API)
    console.log('Form Submitted Successfully!', finalResult.data);
    alert('Form Submitted Successfully! Check console for data.');
    // Optionally, reset form to initial state after submission
    // setFormData(initialFormData);
    // setCurrentStep(1);
  };

  // --- Render Current Step ---

  const renderStep = () => {
    switch (currentStep) {
      case 1:
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
                {getErrorForField('fullName') && <p className="mt-1 text-sm text-red-500">{getErrorForField('fullName')}</p>}
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
                    className: `!w-full !pl-14 !pr-4 !py-3.5 !border  rounded-md focus:!ring-blue-500 focus:!border-blue-500 ${getErrorForField('phoneNumber') ? '!border-red-500' : '!border-gray-300'
                      }`,
                  }}
                  inputClass="!w-full !pl-14 !pr-4 !py-2.5 !border !border-gray-300 !rounded-[12px] !text-sm sm:!text-base focus:!outline-none focus:!ring-2 focus:!ring-indigo-500 focus:!border-indigo-500 transition !duration-200"
                  buttonStyle={{
                    borderRadius: '0.375rem 0 0 0.375rem',
                    borderColor: getErrorForField('phoneNumber') ? 'rgb(239 68 68)' : 'rgb(209 213 219)',
                    backgroundColor: '#f9fafb',
                    padding: '0 0.75rem',
                  }}
                  dropdownStyle={{
                    borderRadius: '0.375rem',
                  }}
                  autoFormat={true}
                />
                {getErrorForField('phoneNumber') && <p className="mt-1 text-sm text-red-500">{getErrorForField('phoneNumber')}</p>}
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {getErrorForField('location') && <p className="mt-1 text-sm text-red-500">{getErrorForField('location')}</p>}
              </div>
            </div>

            {/* Short Bio */}
            {/* Short Bio */}
            <div>
              <label htmlFor="shortBio" className="block text-sm font-medium text-gray-700 mb-1">
                Short Bio
              </label>
              <textarea
                id="shortBio"
                // Add || '' to ensure it's always a string for the value prop
                value={formData.shortBio || ''}
                onChange={handleChange}
                placeholder="(e.g., &quot;Freelance graphic designer passionate about sustainable design solutions.&quot;)"
                rows={4}
                className={`w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none ${getErrorForField('shortBio') ? 'border-red-500' : 'border-gray-300'
                  }`}
                maxLength={400}
              ></textarea>
              <p className="mt-1 text-sm text-gray-500 text-right">
                {/* Use optional chaining (?.) and provide a default of 0 if undefined */}
                {400 - (formData.shortBio?.length || 0)} characters left
              </p>
              {getErrorForField('shortBio') && <p className="mt-1 text-sm text-red-500">{getErrorForField('shortBio')}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Share Your Talents</h2>
            <p className="text-gray-600 mb-6">
              What skills are you ready to share with the SwapSpot community?
            </p>

            <div>
              <label htmlFor="skillsOffered" className="block text-sm font-medium text-gray-700 mb-1">
                Add Skills You Offer
              </label>
              <input
                type="text"
                id="skillsOfferedInput" // Give a unique ID for the input, not the array
                value={currentSkillTag}
                onChange={(e) => setCurrentSkillTag(e.target.value)}
                onKeyDown={(e) => handleSkillKeyDown(e, 'skillsOffered')}
                placeholder="(e.g., &quot;Web Design&quot;, &quot;Photography&quot;)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => addSkillTag('skillsOffered')}
                className="mt-2 px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200 transition-colors"
              >
                Add Skill
              </button>

              <div className="mt-4 flex flex-wrap gap-2">
                {formData.skillsOffered.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeSkillTag('skillsOffered', tag)}
                      className="ml-2 -mr-0.5 h-4 w-4 rounded-full flex items-center justify-center text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              {getErrorForField('skillsOffered') && <p className="mt-1 text-sm text-red-500">{getErrorForField('skillsOffered')}</p>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Skills You Want</h2>
            <p className="text-gray-600 mb-6">
              What skills are you looking to learn or receive from others?
            </p>

            <div>
              <label htmlFor="skillsWanted" className="block text-sm font-medium text-gray-700 mb-1">
                Add Skills You Want
              </label>
              <input
                type="text"
                id="skillsWantedInput" // Unique ID
                value={currentSkillTag}
                onChange={(e) => setCurrentSkillTag(e.target.value)}
                onKeyDown={(e) => handleSkillKeyDown(e, 'skillsWanted')}
                placeholder="(e.g., &quot;Web Design&quot;, &quot;Photography&quot;)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => addSkillTag('skillsWanted')}
                className="mt-2 px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200 transition-colors"
              >
                Add Skill
              </button>

              <div className="mt-4 flex flex-wrap gap-2">
                {formData.skillsWanted.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeSkillTag('skillsWanted', tag)}
                      className="ml-2 -mr-0.5 h-4 w-4 rounded-full flex items-center justify-center text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
              {getErrorForField('skillsWanted') && <p className="mt-1 text-sm text-red-500">{getErrorForField('skillsWanted')}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Almost There!</h2>
            <p className="text-gray-600 mb-6">
              Complete your profile with a picture and an optional portfolio link.
            </p>

            {/* Profile Photo Upload */}
            <div>

              <div className="flex-shrink-0 mb-6">
                {profilePhotoPreview ? (
                  <img
                    src={profilePhotoPreview}
                    alt="Profile Preview"
                    className="h-20 w-20 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">

                <div className='flex flex-col md:flex gap-2 items-center'>
                  <label
                    htmlFor="profilePhoto"
                    className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Upload photo
                    <input
                      id="profilePhoto"
                      name="profilePhoto"
                      type="file"
                      className="sr-only"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handlePhotoUpload}
                    />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.profilePhoto ? (formData.profilePhoto as File).name : 'No file attached'}
                  </p>
                  <p className="text-xs text-gray-500">JPG, PNG. Max 2MB</p>
                </div>
              </div>
            </div>

            {/* Portfolio URL */}
            <div>
              <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio / Website URL <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="url"
                id="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className={`w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${getErrorForField('portfolioUrl') ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {getErrorForField('portfolioUrl') && <p className="mt-1 text-sm text-red-500">{getErrorForField('portfolioUrl')}</p>}
              <p className="mt-1 text-sm text-gray-500">
                Share a link to your work or personal website.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (

    <div className="min-h-screen  flex justify-center items-start pt-16 pb-16">
      <div className="bg-white p-8 rounded-lg  w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
            <div
              key={stepNum}
              className={`flex-1 h-2 rounded-full mx-1 ${stepNum <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
            ></div>
          ))}
        </div>

        {/* Render the current step */}
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-center md:justify-end space-x-3 mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Back
            </button>
          )}
          {currentStep < totalSteps && (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
          {currentStep === 1 && (
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => {
                // For "Skip" button, you might want to advance without full validation
                // or clear the current step's optional fields before moving.
                // For now, it behaves like 'Next' but could be customized.
                handleNextStep();
              }}
            >
              Skip
            </button>
          )}
          {currentStep === totalSteps && (
            <button
              type="button"
              onClick={handleNextStep} // This will trigger handleSubmit
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>

  );
};

export default MultiStepForm;

