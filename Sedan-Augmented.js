//AUGMENTING IS GOOD FOR GROUP PROJECTS SO YOU CAN WORK TOGETHER
//ONE PERSON COULD BE GETTING AND OTHER COULD BE SETTING IN TWO DIFF FILES.
// THIS AUGMENTED FILE IS ADDING TO THE ORIGINAL JS

var Sedan = (function(newSedan){ //() right here is just a placehold call it what you want and it should be called on every first line (see code!!)
  var max_occupancy = 6;
  var current_occupancy = 0;


  newSedan.getOccupancy = function (){//part that changes from iffes
    return current_occupancy;

  };

  newSedan.setOccupancy = function(occupancy){
    if(occupancy <= max_occupancy){
      current_occupancy = occupancy;
    } else {
      throw " Cannot exceed maximum occupancy of " + max_occupancy;
    }
    current_occupancy = occupancy;
  }

  newSedan.getType = function(){
    return "minivan";
  }

  return newSedan;

})(Sedan || {}); //good practice to do || or blank aka {} so no errors run -- This is saying if there is something called sedan defined then use it and pass it in to the function called sedan. If something called sedan doesnt exist- call it.
