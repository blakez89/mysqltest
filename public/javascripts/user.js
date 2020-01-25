
function myFunction() {
	var demo = document.getElementById("demo");

	fetch('http://localhost:3000/users', {
		method: "GET",
		headers: {
		  "Accept": "application/json"
		}
	  }).then(
	res => {
		return res.json() 
	}
	).then(

   ({data})=> {
	

	function addUserData(domElement,userInfo){
		var node = document.createElement("div");
		var textnode = document.createTextNode(userInfo);
		node.appendChild(textnode);
		domElement.appendChild(node);
		
	  }
	
	data.forEach(user=>addUserData(demo,user))

   }
 )

}

myFunction()

