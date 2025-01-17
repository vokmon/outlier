import { getCurrentDate } from "./date-utils.ts";

// const isValidUrl = (urlString: string) => {
//   try {
//     const url = new URL(urlString);
//     // ตรวจสอบ scheme ว่าต้องเป็น http หรือ https
//     if (url.protocol !== 'http:' && url.protocol !== 'https:') {
//       return false;
//     }

//     // ตรวจสอบ hostname ว่าต้องมี top-level domain
//     const hostnameRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost|(\d{1,3}\.){3}\d{1,3}$/;
//     if (!hostnameRegex.test(url.hostname)) {
//       return false;
//     }

//     return true;
//   } catch (error) {
//     // กรณีมี error ใดๆ แสดงว่าไม่ใช่่ url ที่ถูกต้อง
//     return false;
//   }
// }

// protocol ที่รอรับ
const PROTOCOLS = ['http:', 'https:'];
// รูปแบบของ hostname
const HOSTNAME_REGEX = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost|(\d{1,3}\.){3}\d{1,3}$/;

/**
 * ตรวจสอบว่าข้อความที่ได้รับอยู่ในรูปแบบ URL ที่ถูกต้องหรือไม่
 * @param {string} urlString - ข้อความที่ต้องการตรวจสอบในรูปแบบของ URL 
 * @returns {boolean} - ถ้าเป็น URL ที่ถูกต้องจะคืนค่า true ถ้าไม่ใช่จะคืนค่า false
 */
const isValidUrl = (urlString: string) => {
  try {
    // ใช้ URL สร้าง object ของ url จากค่าที่รับมา
    const url = new URL(urlString);

    // ตรวจสอบว่าโปรโตคอลต้องเป็น 'http:' หรือ 'https:'
    // ถ้าไม่ใช่ให้คืนค่า false
    if (!PROTOCOLS.includes(url.protocol)) {
      return false;
    }

    // ตรวจสอบรูปแบบของ hostname ด้วย Regular Expression
    // จะต้องเป็นโดเมนที่ถูกต้อง หรือ 'localhost' หรือ IPv4 ที่ถูกต้อง
    if (!HOSTNAME_REGEX.test(url.hostname)) {
      return false;
    }

    // ถ้าผ่านทุกการตรวจสอบให้คืนค่า true
    return true;
  } catch (error) {
    // ถ้ามีข้อผิดพลาดขณะสร้างวัตถุ URL ให้ถือว่าไม่ใช่ URL ที่ถูกต้อง
    return false;
  }
}

const url1 = "https://app.outlier.ai"
console.log(`Is ${url1} a correct url? Answer is: ${isValidUrl(url1)}`)
const url2 = "http://app"
console.log(`Is ${url2} a correct url? Answer is: ${isValidUrl(url2)}`)

const getAdditionalLinks = () => {
  // Add extra links
  const huasenghengLink = `https://www.huasengheng.com/news/daily-recap-gold-spot-${getCurrentDate(
    "th-TH",
    "2-digit"
  ).replace(/\//g, "-")}`;

  const huasenghengLinkWeekly = `https://www.huasengheng.com/news/market-focus-weekly-${getCurrentDate(
    "th-TH",
    "2-digit"
  ).replace(/\//g, "-")}`;

  const huasenghengLinkHolidayReport = `https://www.huasengheng.com/news/holiday-report-${getCurrentDate(
    "th-TH",
    "2-digit"
  ).replace(/\//g, "-")}`;

  const interGoldLink = `https://www.intergold.co.th/investor_core/analyze-${getCurrentDate(
    "en-GB"
  )
    .replace(/ /g, "-")
    .toLocaleLowerCase()}`;

  return [
    interGoldLink,
    huasenghengLink,
    huasenghengLinkWeekly,
    huasenghengLinkHolidayReport,
  ];
};
export { isValidUrl, getAdditionalLinks };
