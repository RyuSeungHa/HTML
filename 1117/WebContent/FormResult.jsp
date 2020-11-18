<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
    <title>FormResult</title>
</head>
<body>
   <h1>DISPLAY</h1>
      <table>
         <caption>userInfo</caption>
         <tr>
            <td>Identity Code :</td>
            <td><%= request.getAttribute("sID") %></td>
         </Tr>
         <tr>
            <td>User Name :</td>
            <td><%= request.getAttribute("sName") %></td>
         </Tr>
      </table>
   
</body>
</html>



