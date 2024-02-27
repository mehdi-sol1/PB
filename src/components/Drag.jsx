import React, { useState } from 'react';
import XLSX from 'xlsx/dist/xlsx.full.min.js';

const Drag = () => {
  const [excelData, setExcelData] = useState(null);

  const handleDrop = async (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    for (const file of files) {
      const extension = file.name.split('.').pop().toLowerCase();

      if (extension === 'xls') {
        // Handle Excel filess
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const result = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          setExcelData(result);
          console.log('Excel Data:', result);
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.log('Unsupported file format. Please drop an Excel file.');
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Drag and Drop Excel Files</h1>
        <div className="border-dashed border-2 border-gray-400 p-6 text-center">
        {/*excelData ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Excel Data:</h2>
              <pre>{JSON.stringify(excelData, null, 2)}</pre>
            </div>
          ) : (
            <p>Drop your Excel file here.</p>
          )*/}
        </div>
      </div>
    </div>
  );
};

export default Drag;
