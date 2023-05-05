let token = "IGQVJYUFVSVE11WUpCdGp4QkcwS0ZA4WVVoenhtOHJyYTRhTExwYnFNS3dGV1RDU3BwRklKaW5feDQ3MHU4V2RLcDd6dlZAjYmRwbVZAPT3RCZAkxLTjFyYy1jX283eWh6ZAkd6SXk0RFBCUXNaSmRhNmlvMwZDZD"


$('#btnMenu').click(() => {
  $('.mobil-menu').show(500);
});
$('#closeBtn').click(() => {
  $('.mobil-menu').hide(500);
});
var userFeed = new Instafeed({
  get: 'user',
  target: "instafeed",
    resolution: 'low_resolution',
  accessToken: token,
  limit:6,
  template:`<div class="col-12 col-md-4 p-2 " > <a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a></div>`

  
});
userFeed.run();