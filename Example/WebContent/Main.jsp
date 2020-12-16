<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<title>Insert title here</title>
<style>
a{
text-decoration: none;
}
li{
font-size: 30px;
}

</style>
</head>
<body>
<h1><a href="#">Ajax Practice</a></h1>
	<nav>
		<ol id = List>
			
		</ol>
	</nav>
	
	<div id="here">
	</div>
	<div id="end">
	감사합니다!
	</div>
	


</body>
<script>
function Info(language){
	let lang = language + ".jsp"
	fetch(lang).then((receive)=>{
		receive.text().then((text)=>{
			document.querySelector('#here').innerHTML = text;
		})
	})
}
if(location.hash){
	Info(location.hash.substr(2))
}else{Info("index")}
//<a href="#!Java" onclick = "Info('Java')"><li> JAVA </li></a>

fetch('List.jsp').then((receive)=>{
	receive.text().then((text)=>{
		let tag = text.split(",")
		let tagList = "";
		for (i in tag) {
			tagList += '<a href=\"#!'+tag[i]+'\" onclick = "Info(\''+tag[i]+'\')"><li> '+tag[i]+' </li></a>'
		}
		document.querySelector('#List').innerHTML = tagList;
	})
})
</script>
</html>