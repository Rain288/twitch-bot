module.exports = {
  timediff: function(date1, date2){
    var diff = date1.getTime() - Date.parse(date2);
    var daysDifference = Math.floor(diff/1000/60/60/24);
    diff -= daysDifference*1000*60*60*24
    var hoursDifference = Math.floor(diff/1000/60/60);
    diff -= hoursDifference*1000*60*60
    var minutesDifference = Math.floor(diff/1000/60);
    diff -= hoursDifference*1000*60

    diffe = '';
    if(daysDifference != 0){
      diffe += " " + daysDifference + " Days "
    }
    if(hoursDifference != 0){
      if(hoursDifference === 1){
        diffe += hoursDifference + " Hour "
      } else {
        diffe += hoursDifference + " Hours "
      }
    }
    if(minutesDifference != 0){
      diffe += minutesDifference + " Minutes "
    }
    return diffe
  }
}
