const fetchData = async (URL) => {
  console.log("sds");
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    return "Не найден город";
  }
};

export { fetchData };
