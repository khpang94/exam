var total={};
var HttpClient = function() {
this.get = function(aUrl, aCallback) {
var anHttpRequest = new XMLHttpRequest();
anHttpRequest.onreadystatechange = function() { 
if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
aCallback(anHttpRequest.responseText);
}
anHttpRequest.open( "GET", aUrl, true ); 
anHttpRequest.send( null ); 
}
}
var url='https://reqres.in/api/users?page=1';
var client = new HttpClient();
client.get(url, function(response) { 
var response1 = JSON.parse(response);
    var tpage={
       x: response1.total_pages
    };
//document.getElementById('total').innerHTML =response1.total_pages;
//var perpage = response1.per_page;
for (i = 0; i< response1.data.length; i++){
  var name = '';
  name=response1.data[i].last_name + ',' + response1.data[i].first_name;
 document.getElementById('name'+i).innerHTML = name;
 document.getElementById('photo'+i).src = response1.data[i].avatar;
}

}); 
