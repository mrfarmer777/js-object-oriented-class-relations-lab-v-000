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
  constructor(driver,pass){
    this.id=++trip_id;
    this.driverId=driver.id;
    this.passengerId=pass.id;
    store.trips.push(this);
  }
  
  driver(){
    
    return store.drivers.find(function(drv){
      console.log(this);
      return (drv.id===this.driverId);
    });
  }
  
  passenger(){
    return store.passengers.find(function(pass){
      return (pass.id===this.passengerId);
    });
  }
}

