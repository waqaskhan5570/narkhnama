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

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function validateCNIC(cnic) {
  const test = /^[0-9]{5}-[0-9]{7}-[0-9]$/g.test(cnic);
  if (!test) {
    return false;
  }
  return test;
}

export {
  generateDefaultCustomUrlFromTitle,
  createDateAndTimeFromISO,
  validateEmail,
  validateCNIC,
};
