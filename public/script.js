  		publish3.onsubmit = function(section) {

  			let checkform = document.getElementById('publish4');

  			if(checkform) {
  				section3.removeChild(checkform);
  				let div = section3.querySelector('.div-button');
  				section3.removeChild(div);
  			};

	    	let div1 = document.createElement('div');
	    	let div2 = document.createElement('div');
	    	let div3 = document.createElement('div');
	    	let div4 = document.createElement('div');
	    	let div5 = document.createElement('div');
	    	let form = document.createElement('form');
	    	let input1 = document.createElement('input');
	    	let input2 = document.createElement('input');
	    	let input3 = document.createElement('input');
	    	let input4 = document.createElement('input');
	    	let input5 = document.createElement('input');
	    	section3.appendChild(form);
	    	form.setAttribute('id', 'publish4');
	    	form.appendChild(div1);
	    	form.appendChild(div2);
	    	form.appendChild(div3);
	    	form.appendChild(div4);
	    	form.appendChild(div5);
	    	div1.appendChild(input1);
	    	div2.appendChild(input2);
	    	div3.appendChild(input3);
	    	div4.appendChild(input4);
	    	div5.appendChild(input5);
	    	input1.setAttribute('type', 'text');
	    	input2.setAttribute('type', 'text');
	    	input3.setAttribute('type', 'text');
	    	input4.setAttribute('type', 'text');
	    	input5.setAttribute('type', 'submit');
	    	input1.setAttribute('name', 'Foto');
	    	input2.setAttribute('name', 'Name');
	    	input3.setAttribute('name', 'ID');
	    	input4.setAttribute('name', 'Score');
	    	input1.setAttribute('placeholder', 'Link to foto');
	    	input2.setAttribute('placeholder', 'Player name');
	    	input3.setAttribute('placeholder', 'Player ID');
	    	input4.setAttribute('placeholder', 'Score');
	    	input5.setAttribute('value', 'Add player');
	    	input5.setAttribute("id", 'Add')
	    	let div6 = document.createElement('div');
			section3.appendChild(div6);
			div6.classList.add("div-button")
			let button = document.createElement('button');
			div6.appendChild(button);
			button.setAttribute("id", 'close')
			button.textContent = "close"
	    

	    	return false;
	  };




	  	section3.onclick = function(event) {
			event = event || window.event;
			console.log(event.target);
			console.log(event.target.tagName);
			if(event.target.tagName == 'BUTTON' && event.target.getAttribute("id") == "close") {
				let form = document.getElementById('publish4');
				let div = section3.querySelectorAll('.div-button')[0];
				console.log(div);
				section3.removeChild(form);
				section3.removeChild(div);
			};
			if(event.target.tagName == 'INPUT' && event.target.getAttribute("id") == "Add") {
			    const xhr = new XMLHttpRequest();
			    xhr.open("POST", "/users/", true);
			    console.log("POST " + "/users/");
			    xhr.setRequestHeader("Content-type", "application/json");
			    let form = document.getElementById('publish4');

			    xhr.send(JSON.stringify({Foto: form.elements.Foto.value, Name: form.elements.Name.value, ID: form.elements.ID.value, Score: form.elements.Score.value}));

			    form.elements.Foto.value = '';
			    form.elements.Name.value = '';
			    form.elements.ID.value = '';
			    form.elements.Score.value = '';
			};

			return false;
		};





  		function makeTh(section, x) {
		  	let table = document.createElement('table');
		  	table.setAttribute('id', `${x}`+ 'table-id');
			let thead = document.createElement('thead');
			let tr = document.createElement('tr');
			let th1 = document.createElement('th');
			section.appendChild(table);
			let div = document.createElement('div');
			section.appendChild(div);
			div.classList.add("div-button")
			let button = document.createElement('button');
			div.appendChild(button);
			button.setAttribute("id", 'close')
			button.textContent = "close";
			table.appendChild(thead);
			thead.appendChild(tr);
			tr.appendChild(th1);
			th1.textContent = "FOTO";
			let th2 = document.createElement('th');
			tr.appendChild(th2);
			th2.textContent = "NAME";
			let th3 = document.createElement('th');
			tr.appendChild(th3);
			th3.textContent = "ID";
			let th4 = document.createElement('th');
			tr.appendChild(th4);
			th4.textContent = "SCORE";
		};	


		function makeTd2(player, section){
			let table = section.querySelector('table')
			let checktbody = section.querySelector("tbody");

			if(!checktbody){
			let tbody = document.createElement('tbody');
			table.appendChild(tbody);
			};
			let tbody = section.querySelector("tbody");
			let tr = document.createElement('tr');
			tbody.appendChild(tr);
			
			let div1 = document.createElement('div');
			section.appendChild(div1);
			div1.classList.add("div-button2")
			let button1 = document.createElement('button');
			div1.appendChild(button1);
			button1.setAttribute("id", 'delete')
			button1.textContent = "Delete player";
			let div2 = document.createElement('div');
			section.appendChild(div2);
			div2.classList.add("div-button3")
			let button2 = document.createElement('button');
			div2.appendChild(button2);
			button2.textContent = "Transform player";
			let td1 = document.createElement('td');
			let td2 = document.createElement('td');
			let td3 = document.createElement('td');
			let td4 = document.createElement('td');
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			td3.setAttribute("id", 'remove')
			tr.appendChild(td4);
			let img1 = document.createElement('img');
			td1.appendChild(img1);
			img1.setAttribute('src', player.Foto);
			td2.textContent = player.Name;
			td3.textContent = player.ID;
			td4.textContent = player.Score;
		};

		function makeTd(player, section){
			let table = section.querySelector('table')
			let tbody = document.createElement('tbody');
			table.appendChild(tbody);
			let tr2 = document.createElement('tr');
			tbody.appendChild(tr2);
			let td1 = document.createElement('td');
			let td2 = document.createElement('td');
			let td3 = document.createElement('td');
			let td4 = document.createElement('td');
			tr2.appendChild(td1);
			tr2.appendChild(td2);
			tr2.appendChild(td3);
			tr2.appendChild(td4);
			let img1 = document.createElement('img');
			td1.appendChild(img1);
			img1.setAttribute('src', player.Foto);
			td2.textContent = player.Name;
			td3.textContent = player.ID;
			td4.textContent = player.Score;
		};


		section1.onclick = function(event) {
			event = event || window.event;
			console.log(event.target);
			console.log(event.target.tagName);
			if(event.target.tagName == 'BUTTON' && event.target.getAttribute("id") == "close") {
				let table = document.getElementById('1table-id');
				let div = section1.querySelectorAll('.div-button')[0];
				let div1 = section1.querySelector('.div-button2');
				let div2 = section1.querySelector('.div-button3');
				console.log(div);
				section1.removeChild(table);
				section1.removeChild(div);
				section1.removeChild(div1);
				section1.removeChild(div2);
			}
		};




		section1.addEventListener("click", handler);


			function handler() {

				event = event || window.event;
				console.log(event.target);
				console.log(event.target.tagName);
				td3 = document.querySelector('#remove');
				console.log(td3);

				if(event.target.tagName == 'BUTTON' && event.target.getAttribute("id") == "delete") {

					const xhr = new XMLHttpRequest();
				    xhr.open("DELETE", "/users/" + td3.textContent, true);
				    console.log("/users/" + td3.textContent);
				    xhr.setRequestHeader("Content-type", "application/json");

				    xhr.send(JSON.stringify({ID: td3.textContent}));

				    xhr.onload = function () {
				    	console.log(xhr.responseText);
				    

				    if(xhr.status == 200) {
						let table = document.getElementById('1table-id');
						let div = section1.querySelectorAll('.div-button')[0];
						let div1 = section1.querySelector('.div-button2');
						let div2 = section1.querySelector('.div-button3');
						section1.removeChild(table);
						section1.removeChild(div);
						section1.removeChild(div1);
						section1.removeChild(div2);
				    	};
					};
				    
				    return false;
				};  
			}





		section2.onclick = function(event, ) {
			event = event || window.event;
			console.log(event.target);
			console.log(event.target.tagName);
			if(event.target.tagName == 'BUTTON') {
				let table = document.getElementById('2table-id');
				let div = section2.querySelectorAll('.div-button')[0];
				console.log(div);
				section2.removeChild(table);
				section2.removeChild(div);
				let form = document.forms.publish2;
		        let input = form.elements[0];
		        if(input.value == 'Reload table') {
		        	input.value = 'Upload table';
		    	};
			}

		};		





	  	publish1.onsubmit =  function() {
	  		let arr;
	  		
	    	const xhr = new XMLHttpRequest();
	    	xhr.open("GET", "/user/" + this.elements.name.value, true);
	    	console.log("/users/" + this.elements.name.value);
	    	xhr.setRequestHeader("Content-type", "application/json");

	    	xhr.send();

	    	xhr.onload = function () {

	    		if(xhr.status == 200) {
		    		arr = JSON.parse(xhr.responseText);
		        	console.log(xhr.response);
		        	console.log(arr);
	 				
	 				if (arr) {

	 					let table = document.getElementById('1table-id');
						let div = section1.querySelectorAll('.div-button')[0];
						let div2 = section1.querySelectorAll('.div-button2')[0];
						let div3 = section1.querySelectorAll('.div-button3')[0];
						
						if(table) {
							section1.removeChild(table);
						};
						if(div) {
							section1.removeChild(div);
							section1.removeChild(div2);
							section1.removeChild(div3);
						};

			        	for(let i = 0; i <= arr.length - 1; i++) {
			        		let player = arr[i];
			        		console.log(player);
			        		let thead = section1.querySelector('thead');
			        		if (!thead) {
			        			makeTh(section1, 1);
			        		}
			        		makeTd2(player, section1);
			        	}
		        	}	
		        	
		        	return false;
	        	};
	        	};


	   	
	   		console.log('Первый ' + arr);
	    	this.elements.name.value = '';

	    	return false
	  	};


	  	publish2.onsubmit = function() {
	    	const xhr = new XMLHttpRequest();
	   		xhr.open("GET", "/users", true);
	   		xhr.setRequestHeader("Content-type", "application/json");

	    xhr.send();


	    	xhr.onload = function () {
	    		arr = JSON.parse(xhr.responseText);
	        	console.log(xhr.response);
	        	console.log(arr);

				
 				
 				if (arr) {
	        		
	        		let form = document.forms.publish2;
		        	let input = form.elements[0];
 					if(input.value == 'Reload table') {
		        			input.value = 'Upload table';
		        			let table = document.getElementById('2table-id');
		        			let div = section2.querySelectorAll('.div-button')[0];

		        			if(table){
								section2.removeChild(table);
							};

							if(div) {
								section2.removeChild(div);
							};						
		        		};

		        		input.value = 'Reload table';

		        	for(let i = 0; i <= arr.length - 1; i++) {
		        		let player = arr[i];
		        		x = 'tr' + i;
		        		console.log(player);
		        		let thead = section2.querySelector('thead');
		        		if (!thead) {
		        			makeTh(section2, 2);
		        		}
		        		makeTd(player, section2);
		        		
		       		}

	        	}	
	        	
	        	return false;
	        	};

	    return false;
	  };