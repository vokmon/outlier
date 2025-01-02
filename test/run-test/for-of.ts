
const myData = [1, 2, 3];
myData.forEach(async (data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Promise resolved for ${data}`), 1000);
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
});

// const myData = [1, 2, 3];
// myData.forEach(async (data) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Promise resolved for ${data}`), 1000);
//   });

//   await promise;  // This won't work and will throw a syntax error
// });


// const myData = [1, 2, 3];

// for await (const data of myData) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Promise resolved for ${data}`), 1000);
//   });

//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }



// // เครื่องหมาย async ใช้กับ function ที่ต้องการใช้ await
// async function doSomethingWithArray(array) {
//   // ใช้ for...of ในตัวเรียกใช้ async function
//   for (const element of array) {
//     try {
//       // await ใช้กับ Promise
//       await someAsyncFunction(element);
//     } catch (error) {
//       console.error(`Error processing element ${element}: ${error.message}`);
//     }
//   }
// }

// // ฟังก์ชัน async ที่ต้องการถูก await
// function someAsyncFunction(element) {
//   // ทำอะไรส่วนตัวกับ element ที่สามารถใช้ await ได้
//   console.log(`Processing element ${element}`);
//   return new Promise(resolve => setTimeout(resolve, 1000)); // ทำการ delay 1 วินาที
// }

// // เรียกใช้ doSomethingWithArray
// doSomethingWithArray([1, 2, 3, 4]);



// const myData = [1, 2, 3];

// myData.forEach(async (data) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => resolve(`Promise resolved for ${data}`), 1);
//   });
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
