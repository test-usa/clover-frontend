import { useState, ChangeEvent, FormEvent } from 'react';
import { PiUploadSimpleFill } from 'react-icons/pi';
import { RxCross1 } from "react-icons/rx";
import img  from "../../assets/profile.png"
import { Link,  useNavigate } from 'react-router-dom';

interface DisputeFormData {
  swapTitle: string;
  swappingWith: string;
  statement: string;
  files: File[];
}

const DisputeCreate = () => {



 const navigate = useNavigate();

  const handleFormSubmit = (e:FormEvent) => {
    e.preventDefault(); 
    navigate('/dispute-create/success');
  }



  const [formData, setFormData] = useState<DisputeFormData>({
    swapTitle: '',
    swappingWith: '',
    statement: '',
    files: [],
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...Array.from(selectedFiles)],
    }));
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...formData.files];
    updatedFiles.splice(index, 1);
    setFormData({ ...formData, files: updatedFiles });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('swapTitle', formData.swapTitle);
    data.append('swappingWith', formData.swappingWith);
    data.append('statement', formData.statement);

    formData.files.forEach((file) => {
      data.append('files', file); // multiple file same key te jabe
    });

    console.log(formData)
  };

  return (
    <div className="w-full max-w-[836px] mx-auto mt-8 px-4">
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-200 bg-white p-4 rounded-md mb-6">
          <div className="flex justify-between mb-2 flex-col sm:flex-row">
            <p className="font-medium text-typo-600">Swap Title <span className='text-typo-900 text-[16px] pl-5'>Branding & Identity for Web Development</span></p>
            <p className="text-typo-600">{formData.swapTitle}</p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row">
            <p className="font-medium flex items-center text-gray-600">Swapping With <span><img src={img} alt="Swapping With" className="inline w-[24px] h-[24px] border-[1.33px] rounded-full ml-3" /></span> <span className='ml-2 text-typo-900'>Neha Mayumi</span> </p>
            <p className="text-gray-800">{formData.swappingWith }</p>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-[16px] font-semibold text-typo-900 mb-2">Your Statement</h1>
          <textarea
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            className="border text-typo-500 text-[16px] border-gray-300 rounded-md w-full p-4"
            placeholder="Clearly explain what went wrong and why you are filing this dispute."
            rows={5}
          />
          <p className="text-[14px] text-typo-800 mt-1">
            Be factual and include relevant details. This statement will be shared with the other user and the SwapSpot admin team.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-[16px] text-typo-900 font-semibold mb-2">Upload Evidence (Optional)</h1>
          <div className="border border-gray-200 bg-typo-300 flex flex-col items-center justify-center text-center rounded-md gap-3 py-6 cursor-pointer">
            <PiUploadSimpleFill className="text-3xl text-gray-500" />
            <h3 className='text-typo-800'>Drag files here or click to upload</h3>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="text-typo-900 border-1 p-2 border-gray-200 bg-gray-50 cursor-pointer rounded-md"
            >
              Upload files
            </label>
            <p className="text-sm text-typo-500">
              Supported formats: Images, PDFs, etc. (Max file size: 10MB per file)
            </p>
          </div>

          {formData.files.length > 0 && (
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {formData.files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
                >
                  {file.name}
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="text-typo-800 h-[24px] w-[24px] hover:underline"
                  >
               
                  <RxCross1 />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex mb-5  sm:flex-row justify-center gap-5">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, statement: '', files: [] })}
            className="border border-primary-500 w-full sm:w-1/2 p-2 rounded-md text-primary-500 bg-white cursor-pointer"
          >
            Cancel
            
          </button>
         {/* <Link to='/dispute-create/success'>
        
         </Link> */}
           <button 
           onClick={handleFormSubmit}
            type="submit"
            className="border bg-primary-500 text-white w-full sm:w-1/2 p-2 rounded-md cursor-pointer"
          >
          <Link to="/dispute-create/success">  Dispute</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisputeCreate;
