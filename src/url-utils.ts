import { getCurrentDate } from "./date-utils.ts";

const isValidUrl = (urlString: string) => {
  try {
    const url = new URL(urlString);
    // ตรวจสอบ scheme ว่าต้องเป็น http หรือ https
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return false;
    }

    // ตรวจสอบ hostname ว่าต้องมี top-level domain
    const hostnameRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost|(\d{1,3}\.){3}\d{1,3}$/;
    if (!hostnameRegex.test(url.hostname)) {
      return false;
    }

    return true;
  } catch (error) {
    // กรณีมี error ใดๆ แสดงว่าไม่ใช่่ url ที่ถูกต้อง
    return false;
  }
}


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
