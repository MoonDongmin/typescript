class WaterPurifier2 {
   public waterAmount: number;

    constructor(waterAmount: number) {
        this.waterAmount = waterAmount;
    }

    public wash() {
        if (this.waterAmount > 0) {
            console.log("정수기 동작 성공");
        }
    }
}

let purifier2 = new WaterPurifier2(30);
purifier2.wash();

purifier2.waterAmount = 0;