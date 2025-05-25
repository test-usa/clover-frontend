import { useState, ChangeEvent, FormEvent } from 'react';
import { PiUploadSimpleFill } from 'react-icons/pi';

interface DisputeFormData {
  swapTitle: string;
  swappingWith: string;
  statement: string;
  files: File[];
}

const DisputeCreate = () => {
  const [formData, setFormData] = useState<DisputeFormData>({
    swapTitle: 'Branding & Identity for Web Development',
    swappingWith: 'Neha Mayumi',
    statement: '',
    files: [],
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.target.files)],
      }));
    }
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
    console.log('Dispute Submitted:');
    console.log('Swap Title:', formData.swapTitle);
    console.log('Swapping With:', formData.swappingWith);
    console.log('Statement:', formData.statement);
    console.log('Files:', formData.files);
    
  };

  return (
    <div className="w-[836px] mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-200 p-4 rounded-md mb-6">
        
  <div className="flex justify-between mb-2">
    <p className="font-medium text-gray-600">Swap Title:</p>
    <p className="text-gray-800">{formData.swapTitle}</p>
  </div>
  <div className="flex justify-between">
    <p className="font-medium text-gray-600">Swapping With:</p>
    <p className="text-gray-800">{formData.swappingWith}</p>
  </div>


        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-2">Your Statement</h1>
          <textarea
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            className="border border-gray-200 rounded-md w-full p-4"
            placeholder="Clearly explain what went wrong and why you are filing this dispute."
            rows={5}
          />
          <p className="text-sm text-gray-500 mt-1">
            Be factual and include relevant details. This statement will be shared with the other user and the SwapSpot admin team.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-2">Upload Evidence (Optional)</h1>
          <div className="border border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center rounded-md gap-3 py-6 cursor-pointer">
            <PiUploadSimpleFill className="text-3xl" />
            <h3>Drag files here or click to upload</h3>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Upload files
            </label>
            <p className="text-sm text-gray-500">
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
                    className="text-red-600 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-center gap-5">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, statement: '', files: [] })}
            className="border border-blue-500 w-1/2 p-2 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="border border-blue-500 bg-blue-600 text-white w-1/2 p-2 rounded-md hover:bg-blue-700"
          >
            Dispute
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisputeCreate;
