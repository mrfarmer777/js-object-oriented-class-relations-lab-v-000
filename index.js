let drv_id=0;
store={drivers:[], trips:[], passengers:[]};

class Driver{
  constructor(name){
    this.id=++drv_id;
    this.name=name;
    store.drivers.push(this);
  }
  
  trips(){
    return store.trips.filter(trip=>{
      return trip.driverId===this.id;
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
      return store.trips.filter(trip=>{
        return trip.driverId===this.id;
      });
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
      return (drv.id===this.driverId);
    });
  }
  
  passenger(){
    return store.passengers.find(function(pass){
      return (pass.id===this.passengerId);
    });
  }
}

