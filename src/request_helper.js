const RequestHelper =  function (url) {
  this.url = url;
};

RequestHelper.prototype.getData = function (callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    this.url,
  );
  xhr.setRequestHeader("accept","application/json");
  xhr.send();
  xhr.addEventListener("load", () => {
    if (xhr.status!==200) {
      return; // eep!
    } else {
      let jsonReply = xhr.responseText;
      let data = JSON.parse(jsonReply);
      callback(data);
    }
  })
};


module.exports = RequestHelper;
