const CurrentDateTimeText = () => {
  const currentDate = new Date();
  const weekDaysMap = { 0: "Monday", 1: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Saturday", 6: "Sunday" };
  return `${
    weekDaysMap[currentDate.getDay()]
  }, ${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;
};

export default CurrentDateTimeText;
