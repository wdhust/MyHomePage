window.webFile = {
    // 
    // temporary buffer for large data exchange
    // 
    _tempBuffer_: [],

    initBuffer: (length) => {
        _tempBuffer_ = Array(length);
    },

    clearBuffer: () => {
        _tempBuffer_ = [];
    },

    fillBuffer: (str) => {
        _tempBuffer_.push(str);
    },

    getBufferLength: () => {
        return _tempBuffer_.length;
    },

    getBufferData: (index) => {
        return _tempBuffer_[index];
    },

    setBufferData: (index, str) => {
        _tempBuffer_[index] = str;
    },

    //
    // file element
    //
    hasSelectedFile: (fileElemRef) => {
        const file = fileElemRef.files[0];
        return (!file) ? false : true;
    },

    //
    // read data into buffer
    //
    readFileToBuffer: (fileElemRef, sliceSize) => {
        const file = fileElemRef.files[0];
        if (!file) {
            return 0;
        }

        _tempBuffer_ = [];

        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Error occured while parsing file."));
            };

            //
            const fileSize = file.size;
            //const chunkList = [];

            let offset = 0;
            reader.onloadend = (e) => {
                if (e.target.readyState === FileReader.DONE) {
                    const chunk = e.target.result;
                    //chunkList.push(chunk);
                    _tempBuffer_.push(chunk);

                    if (offset < fileSize) {
                        offset += sliceSize;
                        const blob = file.slice(offset, offset + sliceSize);
                        reader.readAsText(blob);
                    } else {
                        console.log("Read large file complete !");
                        //resolve(chunkList);
                        resolve(0);
                    };
                }
            };

            const blob = file.slice(offset, offset + sliceSize);
            reader.readAsText(blob);
        });
    },

    //
    // write buffer data to file
    //
    writeBufferToFile: (fileName) => {
        const textContent = _tempBuffer_.join("");
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
    }
}
