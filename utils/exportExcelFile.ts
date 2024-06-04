import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface JsonData {
  [key: string]: any;
}

export const exportToExcel = (
  jsonData: JsonData[],
  fileName: string = "download"
): void => {
  // Convert JSON data to worksheet
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate Excel file and write to a binary string
  const excelBuffer: any = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  // Create a Blob object
  const data: Blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  // Use FileSaver to save the file
  saveAs(data, fileName + ".xlsx");
};
