
		var my_width = 500; 
		var my_height = 500; 
		var my_top = 25; 
		var my_left = 25; 
		var colors = ['aqua', 'blue', 'coral', 'deepskyblue', 'fuchsia', 'mintcream', 'olive', 'orchid', 'plum', 'silver', 'wheat', 'yellowgreen'];
		var random_color = Math.floor(Math.random()*colors.length)

		function add_new () {

			while(my_width > 50) {
			
			var new_div = document.createElement("div");
			new_div.style.width = my_width + "px";
			new_div.style.height = my_height + "px";
			new_div.style.top = my_top + "px";
			new_div.style.left = my_left + "px";
			new_div.style.background = colors[random_color];

			var the_body = document.getElementById("my_body");

			the_body.appendChild(new_div);

			my_width -= 20;
			my_height -= 20;
			my_top += 10;
			my_left += 10;
			random_color = Math.floor(Math.random()*colors.length);
			}
		}
