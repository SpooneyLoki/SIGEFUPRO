<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Login SIGEFUPRO</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <h2>Formulario de Login</h2>
      <form action="${pageContext.request.contextPath}/login" method="post">
            <label>Usuario:</label>
            <input type="text" name="nombre" required><br><br>
            <label>Contraseña:</label>
            <input type="password" name="password" required><br><br>
            <input type="submit" value="Ingresar">
        </form>
    </body>
</html>