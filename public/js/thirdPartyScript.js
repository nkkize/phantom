$(document).ready(function () {
  var ccn1 = $("#ccn1").text();
  var ccn2 = $("#ccn2").text();
  $.post({
    url: 'http://192.168.128.36:4000/post-data',
    data: {
      ccn1: ccn1,
      ccn2: ccn2
    }
  });
});
