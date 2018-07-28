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