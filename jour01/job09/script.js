function tri(numbers, order) {
    var sortedNumbers = [...numbers]; // Créer une copie du tableau original

    if (order === "asc") {
        for (var i = 0; i < sortedNumbers.length - 1; i++) {
            for (var j = i + 1; j < sortedNumbers.length; j++) {
                if (sortedNumbers[i] > sortedNumbers[j]) {
                    var temp = sortedNumbers[i];
                    sortedNumbers[i] = sortedNumbers[j];
                    sortedNumbers[j] = temp;
                }
            }
        }
    } else if (order === "desc") {
        for (var i = 0; i < sortedNumbers.length - 1; i++) {
            for (var j = i + 1; j < sortedNumbers.length; j++) {
                if (sortedNumbers[i] < sortedNumbers[j]) {
                    var temp = sortedNumbers[i];
                    sortedNumbers[i] = sortedNumbers[j];
                    sortedNumbers[j] = temp;
                }
            }
        }
    }

    return sortedNumbers;
}
