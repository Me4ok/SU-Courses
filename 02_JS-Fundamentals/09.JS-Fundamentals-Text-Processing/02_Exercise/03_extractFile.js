function extract(input) {
    let fileName = input.slice(input.lastIndexOf('\\') + 1, input.lastIndexOf('.'));
    let extension = input.slice(input.lastIndexOf('.') + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extract('C:\\Internal\\training-internal\\Template.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');