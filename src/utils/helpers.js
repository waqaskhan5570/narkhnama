function generateDefaultCustomUrlFromTitle(template) {
  console.log(
    template.split(" ").join("-").split("--").join("-").toLowerCase()
  );
  return template.split(" ").join("-").split("--").join("-").toLowerCase();
}

function createDateAndTimeFromISO(dateTimeInISO, _date, _time, _seconds) {
  try {
    let [date, time] = dateTimeInISO.split("T");
    // eslint-disable-next-line no-unused-vars
    let [hour, minutes, seconds] = time.split(":");
    seconds = seconds.split(".");
    let result = "";
    if (_date) {
      result += date;
    }
    if (_time) {
      result += " " + hour + ":" + minutes;
    }
    return result;
  } catch (e) {
    console.log("createDateAndTimeFromISO", e);
    return dateTimeInISO;
  }
}

export { generateDefaultCustomUrlFromTitle, createDateAndTimeFromISO };
