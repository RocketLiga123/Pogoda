$(document).ready(function(){
	$.getJSON('city.list.json', function(data){
		$('select').on('change', function(){
			var out='';
			for (var key in data){
				if (data[key].country==$('select option:selected').val()){
					out += `<p value="${data[key].id}">${data[key].name}</p>`;
				}
			}
			$('#city').html(out);
			var Zapros = document.getElementById('Zapros');
			var Now = new Date();
			$('#city').html(out);
			if (Zapros == Now){
			$('#city p').on('click',function(){
				$.get (
					"http://api.openweathermap.org/data/2.5/weather",
					{
						"id" : $(this).attr('value'),
						"appid" : "70e1ed322b02acbc57d443dd91065f3e"
					},
						function(data){
							let out='';
							out +='<p style="text-align:center">Погода: <b>'+data.weather[0].main+'</b><br></p>';
							out +='<p style="text-align:center"><img src="https://openweathermap.org/img/w/'+data.weather[0]
							.icon+'.png"></p>';
							out +='<p style="text-align:center">Температура: <b>'+Math.round(data.main.temp-273)+'&#176;		C</b><br></p>';
							out +='<p style="text-align:center">Давление: <b>'+Math.round							(data.main.pressure*0.00750063755419211*100)+'мм.рт.ст</b><br></p>';
							console.log(data.main);
							$('#weather').html(out);
						}
				);
			});}
			
})
	});
});




