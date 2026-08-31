<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            if(session.getAttribute("nombre") == null){
                response.sendRedirect("index.html");
                return;
            }
        %>
        <h1>Bienvenido</h1>
        <p>Usuario: <%= session.getAttribute("nombre") %></p>
    </body>
</html>