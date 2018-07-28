let drv_id=0;
store={drivers:[], trips:[], passengers:[]};

class Driver{
  constructor(name){
    this.id=++drv_id;
    this.name=name;
    store.drivers.push(this);
  }
  
  trips(){
    store.trips.filter(function(trip){
      let drv_trips=[];
      if(trip.driver_id==this.id){
        drv_trips.push(trip);
      }
    });
    
  }
}

let pass_id=0;
class Passenger{
  constructor(name){
    this.id=++pass_id;
    this.name=name;
    store.passengers.push(this);
  }
  
  trips(){
    store.trips.filter(function(trip){
      let pass_trips=[];
      if(trip.pass_id==this.id){
        pass_trips.push(trip);
      }
    });
  }
}
