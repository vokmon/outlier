// const arr = [1, 2, 3, 4];
// await arr.map(async (num) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(num);
//     return num;
// });
// console.log("Finished");



// const arr = [1, 2, 3, 4];

// for (const num of arr) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(num);
// }

// console.log("Finished");


// const arr = [1, 2, 3, 4];
// async function delayLog(num) {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000)); 
//     console.log(num);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// for (const num of arr) {
//   try {
//     await delayLog(num);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// console.log("Finished");

// const arr = [1, 2, 3, 4];

// const delayLog = async (num) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(num);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// (async () => {
//   try {
//     await Promise.all(arr.map(delayLog));
//     console.log("Finished");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();