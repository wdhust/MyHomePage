window.webFileUtil = {
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

        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Problem parsing input file."));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsText(inputFile);
        });
    },

    writeTextFileAndDownload: (fileName, textContent) => {
        const blob = new Blob([textContent], { type: "text/csv" });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            const elem = window.document.createElement("a");
            elem.href = window.URL.createObjectURL(blob);
            elem.download = fileName;

            window.document.body.appendChild(elem);
            elem.click();
            window.document.body.removeChild(elem);
        }
    },

    getStringArray: (str, count) => {
        const strArray = [];
        for (let i = 0; i < count; i++) {
            strArray.push(`${str}-${i}`);
        }
        return strArray;
    },

    readLargeTextFile: (inputFileElem, sliceSize) => {
        const files = inputFileElem.files;
        if (files.length <= 0) {
            return [];
        }

        const file = files[0];

        const reader = new FileReader();
        const fileSize = file.size;
        const chunks = [];

        let offset = 0;
        reader.onloadend = (e) => {
            if (e.target.readyState === FileReader.DONE) {
                const chunk = e.target.result;
                chunks.push(chunk);

                if (offset < fileSize) {
                    offset += sliceSize;
                    const blob = file.slice(offset, offset + sliceSize);
                    reader.readAsText(blob);
                } else {
                    console.log("Read large file complete !");
                };
            }
        };

        const blob = file.slice(offset, offset + sliceSize);
        reader.readAsText(blob);

        return chunks;
    }
}

