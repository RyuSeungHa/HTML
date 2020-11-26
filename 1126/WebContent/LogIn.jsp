<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
body {
	text-align: center;
	padding-top: 30px
}

table {
	margin: auto
}
</style>
</head>
<body>
	<form action="LogIn" name="LogInForm" method="POST">
		<table border=1px solid black; text-align=center;>
			<legend>로그인</legend>
			<br/>

			<tr>
				<td>ID</td>
				<td><input type="text" placeholder="ID를 입력하세요" name="userID"></td>
			</tr>
			<tr>
				<td>PWD</td>
				<td><input type="password" placeholder="패스워드를 입력하세요"
					name="userPWD"></td>
			</tr>

			<tr style="text-align: center;">
				<td colspan="2"><button onclick="LogIn()">로그인</button> <input
					type="button" onclick="Join()" value="회원가입 페이지로">
			</tr>
		</table>
	</form>

</body>
<script>
	function LogIn() {
		JoinForm.submit();
	}

	function Join() {
		location.href = "Main.jsp";
	}
	</script>
</html>