
$("html").ready(function() {

	$(".thumbnail").animate( { opacity:1 }, 1000 );;
	console.log("fade done");
});


$("#twitterAppImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('https://warm-crag-73589.herokuapp.com/', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#flickrAppImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('https://agile-inlet-23006.herokuapp.com/', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#picGalleryImg")
	.on("mouseenter", function(){
			$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('picGallery/gallery.html', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});;


$("#parfectMatchImg")
	.on("mouseenter", function(){
			$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
	.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
	.on("click", function(){
			var win = window.open('parfectMatch/index.html', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#colorGameImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('colorGame/colorGame.html', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#toDoListImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('ToDoList/index.html', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#motionTrackerImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		})
		.on("click", function(){
			var win = window.open('http://www.instructables.com/id/BLE-Target-Tracker/', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
			//$(this).find("parfectMatch/index.html").attr("target", "_blank"); 
		});

$("#olusoImg")
	.on("mouseenter", function(){
		$(this).css("cursor", "pointer");
			$(this).css("opacity", "0.8");
		})
		.on("mouseleave", function(){
			$(this).css("opacity", "1");
		});
