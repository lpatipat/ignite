//BASE URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//Last years days months
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//Next years days months
const NextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
