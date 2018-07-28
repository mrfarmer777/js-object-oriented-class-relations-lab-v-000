let drv_id=0;
store={drivers:[], trips:[], passengers:[]};

class Driver{
  constructor(name){
    this.id=++drv_id;
    this.name=name;
    store.drivers.push(this);
  }
  
  trips(){
    let drv_trips=[];
    store.trips.filter(function(trip){
      if(trip.driver_id==this.id){
        drv_trips.push(trip);
      }
    });
    return drv_trips;
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
    let pass_trips=[];
    store.trips.filter(function(trip){
      if(trip.pass_id==this.id){
        pass_trips.push(trip);
      }
    });
    return pass_trips;
  }
}

let trip_id=0;
class Trip{
  constructor(driver_id,pass_id){
    this.id=++trip_id;
    this.driver_id=driver_id;
    this.pass_id=pass_id;
    store.trips.push(this);
  }
  
  driver(){
    store.drivers.find(function(drv){
      if(drv.id==this.driver_id){
        return drv;
      }
    });
  }
  
  passenger(){
    store.passengers.find(function(pass){
      if(pass.id==this.passenger_id){
        return pass;
      }
    });
  }
}

