// /**
//  * ฟังก์ชันเพื่อตรวจสอบว่า object นั้นว่างหรือไม่
//  * @param {any} obj - อาร์กิวเมนต์ที่ต้องการตรวจสอบ
//  * @returns {boolean} - true ถ้า obj เป็น object และไม่ว่าง, false ถ้าเป็น null หรือ undefined
//  * @throws {Error} - ถ้า obj เป็นประเภทอื่นที่ไม่ใช่ object
//  */
// function isEmptyObject(obj) {
//   // ตรวจสอบว่า obj เป็น null หรือ undefined
//   if (obj === null || obj === undefined) {
//     return false;
//   }

//   // ตรวจสอบว่า obj เป็นประเภทของ object หรือไม่
//   if (typeof obj !== "object") {
//     throw new Error("Invalid input: Input must be an object.");
//   }

//   // ตรวจสอบว่า object ว่างหรือไม่โดยใช้ Object.keys เพื่อดูว่ามีคีย์อยู่หรือไม่
//   return Object.keys(obj).length > 0;
// }

// // ตัวอย่างการใช้งานที่ถูกต้อง
// try {
//   console.log(isEmptyObject({})); // false, เนื่องจากเป็น object ว่าง
//   console.log(isEmptyObject({ a: 1 })); // true, เนื่องจากมีคีย์ 'a' อยู่
//   console.log(isEmptyObject(null)); // false, เนื่องจากเป็น null
//   console.log(isEmptyObject(undefined)); // false, เนื่องจากเป็น undefined
// } catch (error) {
//   console.error(error.message);
// }

// // ตัวอย่างการใช้งานที่มีข้อผิดพลาด
// try {
//   console.log(isEmptyObject(123)); // จะทำให้เกิด Error
// } catch (error) {
//   console.error(error.message); // Invalid input: Input must be an object.
// }

// try {
//   console.log(isEmptyObject("Hello")); // จะทำให้เกิด Error
// } catch (error) {
//   console.error(error.message); // Invalid input: Input must be an object.
// }

// try {
//   console.log(isEmptyObject(true)); // จะทำให้เกิด Error
// } catch (error) {
//   console.error(error.message); // Invalid input: Input must be an object.
// }

// /*
//   สรุป: ฟังก์ชัน isEmptyObject ใช้เพื่อตรวจสอบว่า object ว่างหรือไม่ โดยจะคืนค่า false ถ้า object เป็น null หรือ undefined
//   ถ้าเป็น object ที่มีคีย์ จะคืนค่า true และจะขว้าง Error หากว่าข้อมูลประเภทอื่นๆ ถูกส่งมาไม่ใช่ object
// */

// function isEmptyObject(obj) {
//   // ตรวจสอบว่า obj คือ null หรือ undefined
//   if (obj === null || obj === undefined) {
//       return false;
//   }

//   // ตรวจสอบว่า obj คือ object หรือไม่
//   if (typeof obj !== 'object') {
//       throw new Error('Invalid input. Please provide an object.');
//   }

//   // ตรวจสอบว่า object เป็นค่าว่างโดยเช็ค Object.keys(obj).length
//   return Object.keys(obj).length === 0;
// }

// // แสดงตัวอย่างการใช้งานแบบถูกต้อง
// try {
//   const obj1 = {};       // Object ว่าง
//   const obj2 = { key: 'value' }; // Object ไม่ว่าง
//   const obj3 = null;
//   const obj4 = undefined;
//   const num = 42;         // Number
//   const str = 'hello';    // String
//   const bool = true;     // Boolean

//   console.log('obj1:', isEmptyObject(obj1)); // Output: obj1: true
//   console.log('obj2:', isEmptyObject(obj2)); // Output: obj2: false
//   console.log('obj3:', isEmptyObject(obj3)); // Output: obj3: false
//   console.log('obj4:', isEmptyObject(obj4)); // Output: obj4: false
// } catch (error) {
//   console.error('Error:', error.message);
// }

/**
 * ฟังก์ชันเพื่อตรวจสอบว่า object นั้นเป็นค่าว่างหรือไม่
 * @param {any} obj - object ที่ต้องการตรวจสอบ
 * @returns {boolean} - true ถ้า obj เป็น object และ ไม่เป็นค่าว่าง, false ถ้า object เป็นค่าว่าง หรือ null หรือ undefined
 * @throws {Error} - ถ้า obj เป็นประเภทอื่นที่ไม่ใช่ประเภท object
 */
function isEmptyObject(obj) {
  // ตรวจสอบว่า obj เป็น null หรือ undefined
  if (obj === null || obj === undefined) {
    return false;
  }

  // ตรวจสอบว่า obj เป็นประเภทของ object หรือไม่
  if (typeof obj !== "object") {
    throw new Error("Invalid input: Input must be an object.");
  }

  // ตรวจสอบว่า object ว่างหรือไม่โดยใช้ Object.keys เพื่อดูว่ามีคีย์อยู่หรือไม่
  return Object.keys(obj).length > 0;
}

// // ตัวอย่างการใช้งานเมื่อมีการส่งข้อมูลที่ถูกต้อง
// console.log(isEmptyObject({})); // false, เนื่องจากเป็น object ว่าง
// console.log(isEmptyObject({ a: 1 })); // true, เนื่องจากมีคีย์ 'a' อยู่
// console.log(isEmptyObject(null)); // false, เนื่องจากเป็น null
// console.log(isEmptyObject(undefined)); // false, เนื่องจากเป็น undefined

// // ตัวอย่างการใช้งานเมื่อส่งข้อมูลที่ไม่ใช่ประเภท object ข้อมูลไม่ถูกต้องจะได้ error : Input must be an object.
// try {
//   console.log(isEmptyObject(123)); // ข้อมูลตัวเลข
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log(isEmptyObject("Hello")); // ประเภทข้อมูลแบบ string
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log(isEmptyObject(true)); // ประเภทข้อมูล boolean
// } catch (error) {
//   console.error(error.message);
// }

/*
  สรุป: ฟังก์ชัน isEmptyObject ใช้เพื่อตรวจสอบว่า object ว่างหรือไม่ โดยจะคืนค่า false ถ้า object เป็น null หรือ undefined
  ถ้าเป็น object ที่มีคีย์ จะคืนค่า true และจะขว้าง Error หากว่าข้อมูลประเภทอื่นๆ ถูกส่งมาไม่ใช่ object
*/

export function isNotEmptyObject(obj) {
  if (obj === null || obj === undefined) {
    return false;
  }

  if (typeof obj !== "object") {
    throw new Error("Invalid input: Input must be an object.");
  }

  return Object.keys(obj).length > 0;
}
