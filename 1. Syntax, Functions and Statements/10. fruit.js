function printRequiredMoneyForFruits(fruit, weightGrams, priceKG) {
    let weightKG = weightGrams / 1000;
    let requiredMoney = weightKG * priceKG;

    console.log(`I need $${requiredMoney.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`)
}