function printWordsUppercase(string) {
    let resultArr = string.match(/\w+/gm);
    resultArr = resultArr.map(x => x.toUpperCase());

    console.log(resultArr.join(", "));
}