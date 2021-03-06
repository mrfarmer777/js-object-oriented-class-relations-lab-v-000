let drv_id=0;
const store={drivers:[], trips:[], passengers:[]};

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
  
  passengers(){
   let passengers=[];
   let myTrips=this.trips();
   myTrips.forEach(function(trip){
     console.log(trip);
     console.log(trip.passenger());
     passengers.push(trip.passenger());
   });
   return passengers;
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
    let goalId=this.id;
    return store.trips.filter(trip=> trip.passengerId===goalId);
  }
  
  drivers(){
    let drivers=[];
    const myTrips=this.trips();
    myTrips.forEach(function(trip){
      drivers.push(trip.driver());
    });
    return drivers;
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
    let goalId=this.driverId;
    return store.drivers.find(d => d.id==goalId);
  }
  
  passenger(){
    let goalId=this.passengerId;
    return store.passengers.find(function(pass){
      return pass.id === goalId;
    });
  }
}

