// หน่วยที่สามารถแปลงได้
const UNITS = ["B", "KB", "MB", "GB", "TB"];

// จำนวนหน่วย
const BYTE_CONVERSION_FACTOR = 1024;
/**
 * เพื่อจัดรูปแบบข้อมูลของตัวเลขไบต์ (bytes) ให้มนุษย์สามารถอ่านได้ง่าย
 * โดยแปลงหน่วยไบต์เป็นหน่วยที่เหมาะสม เช่น B, KB, MB, GB, หรือ TB ในรูปแบบของคอมพิวเตอร์
 *
 * @param {number} bytes - จำนวน bytes ที่จะดำเนินการ format
 * @returns {string} - ค่าที่ format ตามจำนวนที่รับมา
 * @throws {Error} - ค่าที่รับมาเป็น null
 */
export function formatBytes(bytes = 0) {
  // ได้ error ที่มีข้อความที่บอกสาเหตุเมื่อค่าที่รับมาเป็น null
  if (bytes === null) {
    throw new Error("Byte cannot be null.");
  }

  // แปลงค่าของ bytes ให้อยู่ในรูปแบบ ด้วยการแปลงขนาด และ หาหน่วยที่เหมาะสม
  let size = bytes;
  let unitIndex = 0;
  while (size >= BYTE_CONVERSION_FACTOR && unitIndex < UNITS.length - 1) {
    size /= BYTE_CONVERSION_FACTOR;
    unitIndex++;
  }

  // จัดรูปแบบของตัวเลขให้อยู่ในรูปแบบ #,###.## มีทศยม 2 ตำแหน่งและหน่วยที่แปลง
  return `${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(size)} ${UNITS[unitIndex]}`;
}


console.log(`1048576 byest is ${formatBytes(1048576)}`);

console.log(`10000 byest is ${formatBytes(10000)}`);
console.log(`22323404 byest is ${formatBytes(22323404)}`);
console.log(`2232340422323404 byest is ${formatBytes(2232340422323404)}`);