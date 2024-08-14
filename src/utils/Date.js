var DAY_OF_WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const convertDate = (date) => {
  if (date) {
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    const month = date.toLocaleString("ru", { month: "long" });
    return `${day} ${month}`;
  }
};

const getDaysOfWeek = (date) => {
  if (date) {
    return DAY_OF_WEEK[date.getDay()];
  }
};

export { convertDate, getDaysOfWeek };
