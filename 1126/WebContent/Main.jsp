<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
body{
text-align :center;
padding-top : 30px}
table{
margin:auto}</style>
</head>
<body>
	<form action="Join" name="JoinForm" method="POST">
		<table border = 1px solid black; text-align = center; >
		<legend>회원가입</legend><br/>
			<tr>
				<td>이름</td>
				<td><input type="text" placeholder = "이름을 입력하세요" name="userName"></td>
			</tr>
			<tr>
				<td>ID</td>
				<td><input type="text" placeholder = "ID를 입력하세요" name="userID"></td>
			</tr>
			<tr>
				<td>PWD</td>
				<td><input type="password" placeholder = "패스워드를 입력하세요" name="userPWD"></td>
			</tr>
			<tr>
				<td>생년월일</td>
				<td><input type="date" name="userBirth"></td>
			</tr>
			<tr>
				<td>성별</td>
				<td>남<input type="radio" name="usergender" value="남자"> ||
				여<input type="radio" name="usergender" value="여자"></td>
			</tr>
			<tr>
				<td>E-mail</td>
				<td><input type="email" placeholder = "example@example.com(co.kr)" name="userMail"></td>
			</tr>
		
		<tr style="text-align: center;">
				<td colspan="2"><button onclick="Join()">회원가입</button> 
				<input type="button" onclick="LogIn()" value="로그인 페이지로">
					
			</tr>
		</table>
	</form>

</body>
<script>
	function Join() {
		JoinForm.submit();
	}

	function LogIn() {
		location.href = "LogIn.jsp";
	}
	</script>
</html>