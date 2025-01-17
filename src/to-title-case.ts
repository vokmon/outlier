// export function toTitleCase(str: string) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }


/**
 * แปลงข้อความที่ได้รับมาให้อยู่ในรูปแบบ title case
 * กรณีที่ค่าที่ได้รับมาเป็น null, undefined หรือ มีแต่ช่องว่างจะให้ผลลัพธ์เป็นค่าว่าง
 * ตัวเลขและอักขระพิเศษที่อยู่ในข้อความจะไม่ถูกแปลง
 *
 * @param {string} text - ข้อความที่ต้องการแปลงให้อยู่ในรูปแบบ title case
 * @return {string} ข้อความที่อยู่ในรูปแบบ title case
 */
function toTitleCase(text) {
  // ตรวจสอบกรณีข้อความที่รับมาเป็น null, undefined หรือ มีแต่ช่องว่างจะให้ผลลัพธ์เป็นค่าว่าง ทันที
  if (!text || text.trim() === '') {
    return '';
  }

  // แยกคำแต่ละคำด้วยการใช้ช่องว่าง
  return text.split(' ').map(word => {
    // แยกตัวอักษรตัวแรกเพื่อแปลงเป็นตัวพิมพ์ใหญ่ ตัวอักษรที่เหลือเป็นตัวพิมพ์เล็ก แล้วรวมกันเป็นคำ
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' '); // รวมคำที่แปลงแล้วกลับ
}

// Example usage:
console.log(toTitleCase("hello world")); // ผลลัพธ์: "Hello World"
console.log(toTitleCase("javaScript is fun!")); // ผลลัพธ์: "Javascript Is Fun!"
console.log(toTitleCase("  ")); // ผลลัพธ์: ""
console.log(toTitleCase(null)); // ผลลัพธ์: ""
console.log(toTitleCase("  multiple   spaces  ")); // ผลลัพธ์: "Multiple Spaces"
console.log(toTitleCase("123 testing")); // ผลลัพธ์: "123 Testing"
console.log(toTitleCase("!special*chars#")); // ผลลัพธ์: "!special*chars#"


// /**
//  * Function to convert a string to title case.
//  * If the input is null, undefined, empty or contains only spaces,
//  * the function returns an empty string.
//  * 
//  * @param {string} str - The input string to be converted to title case.
//  * @returns {string} - The converted title case string.
//  */
// function toTitleCase(str) {
//   // Check if the input is null, undefined or a string with only spaces
//   if (!str || !str.trim()) {
//       return ""; // Return empty string for invalid input
//   }
  
//   // Split the string into words, process each word to title case
//   return str
//     .split(' ')
//     .map(word => {
//         // Return word with first character in uppercase and rest in lowercase
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(' '); // Join processed words back into a single string
// }

// // Example usage:
// console.log(toTitleCase("hello world")); // Output: "Hello World"
// console.log(toTitleCase("javaScript is fun!")); // Output: "Javascript Is Fun!"
// console.log(toTitleCase("  ")); // Output: ""
// console.log(toTitleCase(null)); // Output: ""
// console.log(toTitleCase("123 testing")); // Output: "123 Testing"
// console.log(toTitleCase("!special*chars#")); // Output: "!special*chars#"