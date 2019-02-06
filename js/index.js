$(document).ready( function() {
  var date = new Date();
  var month = date.getMonth();
  if (month < 10) {
    month = "0" + month
  }
  var year = date.getFullYear();
  var display = year + "-" + month
  $('#calMonth').val(display);
});