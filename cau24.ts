abstract class Appliance24 {
    abstract turnOn(): void;
}

class Fan24 extends Appliance24 {
    turnOn(): void {
        console.log("Quat da duoc bat");
    }
}

class AirConditioner24 extends Appliance24 {
    turnOn(): void {
        console.log("May lanh da duoc bat");
    }
}

const fan24 = new Fan24();
const airConditioner24 = new AirConditioner24();

fan24.turnOn();
airConditioner24.turnOn();