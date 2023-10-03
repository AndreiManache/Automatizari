const fs = require('fs');
const Excel = require('exceljs');

// Replace 'input.xlsx' with the path to your Excel file
const inputFilePath = 'C:/Users/manac/Downloads/Ducati_model_data.xlsx';

// Replace 'output.json' with the desired path for your JSON output file
const outputFilePath = 'output.json';

async function readExcelAndStoreInJson() {
  const workbook = new Excel.Workbook();

  try {
    await workbook.xlsx.readFile(inputFilePath);

    const worksheet = workbook.getWorksheet(1); // Assuming data is in the first sheet

    const jsonData = [];

    worksheet.eachRow((row, rowNumber) => {
      // Assuming the data is in columns A and B (change the column numbers as needed)
      const columnAValue = row.getCell(1).value;
      const columnBValue = row.getCell(2).value;

      // Assuming each row has both columnA and columnB values
      if (columnAValue && columnBValue) {
        jsonData.push({ columnA: columnAValue, columnB: columnBValue });
      }
    });

    // Write the jsonData to the output JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2));

    console.log('Excel data successfully read and stored in JSON.');
  } catch (error) {
    console.error('Error reading or writing the file:', error.message);
  }
}

readExcelAndStoreInJson();
