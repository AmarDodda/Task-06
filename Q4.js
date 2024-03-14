// Write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(basePrice, costPerMinute, costPerMeter, serviceFee) {
        this.basePrice = basePrice;
        this.costPerMinute = costPerMinute;
        this.costPerMeter = costPerMeter;
        this.serviceFee = serviceFee;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const fare = this.basePrice + (this.costPerMinute * timeInMinutes) + (this.costPerMeter * distanceInMiles);
        return fare + this.serviceFee;
    }
}
