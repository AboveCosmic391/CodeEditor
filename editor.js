function updateOutput(){
    console.log("function called ");
    const htmlInput = document.getElementById("html-input").value;
    console.log(htmlInput);
    const previewFrame = document.getElementById("preview-frame").contentWindow.document;
    previewFrame.open();
    previewFrame.write(htmlInput);
    previewFrame.close();
}