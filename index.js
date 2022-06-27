var tab;
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  tab = tabs[0];
});
window.addEventListener('load',()=>{
    document.getElementById('download').addEventListener('click',()=>{
      function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'},(msg)=>{
        download(msg.data, 'json.txt', 'text/plain');
    });
})
})
