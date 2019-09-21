function printWordsUppercase(string) {
    const regex = /\w+/gm;

    let resultArr = string.match(regex);
    resultArr = resultArr.map(x => x.toUpperCase());

    console.log(resultArr.join(", "));
}