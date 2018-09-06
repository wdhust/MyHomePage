﻿window.webFileUtil = {
    showPrompt: (message) => {
        return prompt(message, "Type anything here");
    },

    readUploadedFileAsText: (inputFileElem) => {
        const files = inputFileElem.files;
        if (files.length <= 0) {
            return "";
        }
        console.log(files.length);
        const inputFile = files[0];

        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onerror = () => {
                fileReader.abort();
                reject(new DOMException("Problem parsing input file."));
            };
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsText(inputFile);
        });
    }
}
