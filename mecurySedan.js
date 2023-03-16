//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class car extends VehicleModule{
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num) {
        if (num <= this.maximumPassengers) {
            this.passengers = num
        } else {

        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true
        } else {
            return this.started = false
        }
    }
    
    needService(milage) {
        if (this.milage > 30000) {
            return this.timeForMaintenance = true
        } else {
            return this.timeForMaintenance = false
        }
    }
}

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

let newCar = new car ('mercury', 'sedan', '2002', 'white', 50000)

newCar.start()
newCar.loadPassenger(3)
newCar.stop()
newCar.needService()

console.log(newCar)