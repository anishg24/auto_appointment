function makeAppointments(number_of_appointments) {
  if (number_of_appointments < 0) {
    return console.error("Provide a positive value");
  }
  var dataString = $("#apptInfo").serialize();

  function getDataStringInfo(dataString) {
    month = dataString.split("%")[0][7] + dataString.split("%")[0][8];
    date = parseInt(dataString.split("%")[1][2] + dataString.split("%")[1][3]);
    year = dataString.split("%")[2].split("&")[0];
    year = year[2] + year[3] + year[4] + year[5];
    class_code = dataString.split("&")[2];
    class_code = class_code[3] + class_code[4] + class_code[5] + class_code[6];
    return [month, date, year, class_code];
  }

  function handle_post(dataString) {
    info = getDataStringInfo(dataString);
    month = info[0];
    date = info[1];
    year = info[2];
    $.ajax({
      type: "POST",
      url: "createAppointmentSmall.php",
      data: dataString,
      success: function(result) {
        if (result) {
          console.error(result);
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.error("ajax failed" + xhr.status);
      }
    });
  }

  function newDataString(dataString) {
    info = getDataStringInfo(dataString);
    month = info[0];
    date = info[1];
    year = info[2];
    class_code = info[3];

    next_week = new Date(year, month - 1, date + 7);
    console.log("Making appointment for " + next_week.toDateString());
    next_month = next_week.getMonth() + 1;
    next_date = next_week.getDate();
    next_year = next_week.getFullYear();

    new_dataString =
      "stDate=" +
      next_month +
      "%2F" +
      next_date +
      "%2F" +
      next_year +
      "&event=1&st=" +
      class_code;
    return new_dataString;
  }

  handle_post(dataString);

  for (var i = 0; i < number_of_appointments - 1; i++) {
    dataString = newDataString(dataString);

    handle_post(dataString);
  }
  console.log("DONE GENERATING " + number_of_appointments + " APPOINTMENTS");
}

console.log('Thank you for "downloading" this auto-appointment tool!');
console.log("This program was made by generaldefence.");
console.log("HOW TO USE:");
console.log("1. Run this code to make the function.");
console.log("2. Choose the start date and class you want to register for.");
console.log(
  "3. Type the number of appointments you want when running the function (i.e. makeAppointments(2) for 2 appointments)."
);
console.log(
  "NOTE: FlexTime blocks some appointments from happening too early, and there's no way to bypass it from my side, so you will have to run this often!"
);
