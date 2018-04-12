function mySort(arr){
	var a = []
	var b = []
	var c

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] !== 'string'){
		if(parseInt(arr[i]) % 2 == 0){
			a.push(parseInt(arr[i]));
		}
		else {
			b.push(parseInt(arr[i]));
		}
		}
	

}
console.log(a)
console.log(b)
c = b.concat(a)
	console.log(c)
}

mySort([20,23,25,26,'bye',29.5])
mySort([90, 45, 66, 'bye', 100.5])
mySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

function mySort(arr){
    var p = []
	var q = []
	var c

	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] !== 'string'){
		if(parseInt(arr[i]) % 2 == 0){
			p.push(parseInt(arr[i]));
		}
		else {
			q.push(parseInt(arr[i]));
		}
		}
    
	

}
     p.sort(function(a,b){
           return a-b
            });
     q.sort(function(a,b){
      return a-b
     });

    c = q.concat(p)
	   return c
}

https://www.tolet.com.ng/blog/wp-content/uploads/2016/10/lekki-event-center-decorated2.jpg
https://media-api.xogrp.com/images/462d3a18-7d68-43c4-8326-e34f73658091~rs_2001.480.fit.jpg
https://dun6irwnoloqf.cloudfront.net/images/venues/1380/Noah's-Event-Centers-Frisco-Plano-TX-8_main.1464112452.jpg

 <script>
      $(".button-collapse").sideNav();
      $(document).ready(function(){
        var carousel_interval = 7000;
        $('.carousel').carousel();

        setInterval(function(){
          $('.carousel').carousel('next');
        }, carousel_interval);
        })
      
    </script>