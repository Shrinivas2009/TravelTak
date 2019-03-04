var jsonData;

	$.getJSON("js/fakepeople.json", function(json) {
	    console.log(json); // this will show the info it in firebug console
	    jsonData = json;
	});

	$("#colorGreenEye").click(function(items){
		var count = 0;

		$.each(jsonData, function(key, value){
			if(value.eyeColor){
				if(value.eyeColor=="green"){
					count++;
				}	
			}
		});
		$("#one").append('<h1 class="countGreenColor">'+count+ '</h1>')	
	});

	function sortingFunction(obj1, obj2){
		return obj2.value - obj1.value;
	}

	$("#SurName").click(function(items){
		var uniqueSurNames = [];

		$.each(jsonData, function(key, value){
			var nameIndex = -1;
			//assumed last as surname
			if(value.name && value.name.last){
				uniqueSurNames.forEach(function( obj, index ){
					if( obj.name === value.name.last )
						nameIndex = index;
				});

				if( nameIndex > -1 ){
					uniqueSurNames[nameIndex]["value"]++;
				}
				else{
					uniqueSurNames.push({
											"name": value.name.last,
											"value": 1
										});
				}
			}
		});
		uniqueSurNames.sort(sortingFunction);
		var topSurnames = uniqueSurNames.splice(0, 10); 
		topSurnames.forEach(function( obj, index ){
			$("#two").append('<h3>surename: '+ obj.name + ', count: '+ obj.value +'<br></h3>');	
		});
		
	});

	$("#blueEye").click(function(items){
		var avg;
		var blueEyeCount = 0;
		var sumOfBlueEyeAges = 0;

		$.each(jsonData, function(key, value){
			if(value && value.eyeColor=="blue"){
				blueEyeCount++;
				sumOfBlueEyeAges += value.age;
			}
		});


		console.log(" Avg of blue eye Age " + ( sumOfBlueEyeAges / blueEyeCount) );
		avg = ( sumOfBlueEyeAges / blueEyeCount);
		$("#three").append('<h1>'+avg+ '</h1>')
								
	});
		