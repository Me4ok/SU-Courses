function names(input) {
    console.log(
        input.sort((a, b) => a.localeCompare(b))
            .map((name, index) => `${index + 1}.${name}`)
            .join('\n')
    );
}

names(["John", "Bob", "Christina", "Ema"]);