<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>꼴받는 스킨을 선택하세요</h3>
	<form action="checkServlet" method="get">
		<table>
			  <tr>
            <td><img src="img/honey.jpg" width="250px" height="200px"></td> 
            <td><img src="img/flower.png"width="250px" height="200px"></td> 
            <td><img src="img/omega.jpg"width="250px" height="200px"></td>
            <td><img src="img/devil.jfif"width="250px" height="200px"></td>
         </tr>
         <tr>
            <td><input type="checkbox" name="pick" value ="img/honey.jpg">꿀잼 티모</td> 
            <td><input type="checkbox" name="pick" value ="img/flower.png">영혼의 꽃 티모</td> 
            <td><input type="checkbox" name="pick" value ="img/omega.jpg">오메가 스쿼드 티모</td> 
         	<td><input type="checkbox" name="pick" value ="img/devil.jfif">작은 악마 티모</td> 
         </tr>   
		</table>
		<input type="submit" value="제출">
		
	</form>

</body>
</html>