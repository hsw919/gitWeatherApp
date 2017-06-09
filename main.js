$(document).ready(function() {
	$.getJSON('https://ipinfo.io', function(data){
  let city = data.city;
  let location = data.loc;
  $('#location').html(city);
  $.getJSON('https://api.apixu.com/v1/current.json?key=a85f370f44e543caa56154846170906&q=' + location, function(response) {
    $('#sky').html(response.current.condition.text);
    $('#icon').html('<img src="http:' + response.current.condition.icon + '">');
  	$('#temp').html(response.current.temp_f + '\u2109');
  	$('#feelsLike').html('Feels Like: ' + response.current.feelslike_f + '\u2109');
  	$('#wind').html('Wind: ' + response.current.wind_dir + ' ' + response.current.wind_mph + ' mph');
  	$('#humidity').html('Humidity: ' + response.current.humidity + '%');
  	$('#precip').html('Precipitation: ' + response.current.precip_in + ' in');
  	$('#pressure').html('Pressure: ' + response.current.pressure_in + ' in');
  	$('#vis').html('Visibility: ' + response.current.vis_miles + ' mi');
  });
});
});