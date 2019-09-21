function printVendingMachineOrders(stringArray) {
    const productsPrices = {
        "coffee caffeine": 0.80,
        "coffee decaf": 0.90,
        "tea": 0.80
    };

    const milkPercentPrice = 0.1,
        sugarPrice = 0.1;

    function getProductPrice(drinkType, coffeeType) {
        let product = drinkType;

        if (drinkType === "coffee") {
            product = `${drinkType} ${coffeeType}`;
        }

        return productsPrices[product];
    }

    let totalIncome = 0;

    for (let order of stringArray) {
        let orderArr = order.split(", "),
            coins = Number(orderArr[0]),
            drinkType = orderArr[1],
            coffeeType = "",
            drinkPrice = 0,
            milkPrice = 0;

        if (drinkType === "coffee") {
            coffeeType = orderArr[2];
        }

        drinkPrice = getProductPrice(drinkType, coffeeType);

        if (orderArr.indexOf("milk") !== -1) {
            milkPrice = Number((drinkPrice * milkPercentPrice).toFixed(1));
        }

        let orderPrice = drinkPrice + milkPrice;

        if (orderArr[orderArr.length - 1] > 0) {
            orderPrice += sugarPrice;
        }

        let coinsOrderPriceDifference = coins - orderPrice;

        if (coinsOrderPriceDifference >= 0) {
            totalIncome += orderPrice;
            console.log(`You ordered ${drinkType}. Price: $${orderPrice.toFixed(2)} Change: $${coinsOrderPriceDifference.toFixed(2)}`)
        } else {
            console.log(`Not enough money for ${drinkType}. Need $${Math.abs(coinsOrderPriceDifference).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}