const htmlcode = document.getElementById("htmlcode");
csscode = document.getElementById("csscode");
jscode = document.getElementById("jscode");
output = document.getElementById("output");

htmlcode.onkeyup = () => run();
jscode.onkeyup = () => run();
csscode.onkeyup = () => run();

function run(){
    localStorage.setItem("htmlcode", htmlcode.value)
    localStorage.setItem("csscode", csscode.value)
    localStorage.setItem("jscode", jscode.value)

    output.contentDocument.body.innerHTML = 
    `<style>${csscode.value}</style>` +htmlcode.value;
    output.contentWindow.eval(jscode.value);
}

htmlcode.value = localStorage.htmlcode ==undefined? "": localStorage.htmlcode;
csscode.value = localStorage.csscode==undefined? "": localStorage.csscode;
jscode.value = localStorage.jscode==undefined? "": localStorage.jscode;


