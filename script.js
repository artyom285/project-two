document.addEventListener("keypress", (e) => {
	if(e.key == "Enter") {
		var search = document.querySelector(".search").value;
		
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'f3190674e8mshe1b2879f48662c0p1fa57bjsna4b5b70d2e79',
				'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
			}
		};

		if(search == "") {
			alert("Plese, enter your city 🌍");
		}
			
		fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=c`, options)
			.then(response => response.json())
			.then(data => {
				var today = new Date();
				var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				var mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

				var city = data.location.city;
				var country = data.location.country;
				var temp = data.current_observation.condition.temperature;
				var cond = data.current_observation.condition.text;
		
				document.querySelector(".location").innerText = `${city}, ${country} 🔥`;
				document.querySelector(".date").innerHTML = `${day[today.getDay() - 1]}, ${today.getDate()} ${mounth[today.getMonth()]}, ${today.getFullYear()}`;
				document.querySelector(".temp").innerText = `${temp}°C`;
				document.querySelector(".condition").innerHTML = `${cond}`;
		
				document.getElementById("center").style = "display: block";
				document.getElementById("bottom").style = "display: block";

				console.log(data);
			})
			.catch(err => console.error(err));
	}
})

