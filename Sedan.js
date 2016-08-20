var Sedan = (function(){
  var color = "blue";
  var type = "sedan";

  return {
    manufacture_Date: new Date(), //prints out todays date
    getColor: function(){
      return color;
    },
    setColor: function(newColor){
      color = newColor;
    },
    getType: function(){
      return type;
    }
  }
})();