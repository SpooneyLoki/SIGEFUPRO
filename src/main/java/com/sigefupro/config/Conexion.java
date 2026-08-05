package com.sigefupro.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

public class Conexion {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            String url = "jdbc:mysql://localhost:3306/sigefupro?useSSL=false&serverTimezone=UTC";
          
            String usuario = "root";
            String password = "2808"; 
            
            Connection conexion = DriverManager.getConnection(url, usuario, password);
            System.out.println("¡Conexión exitosa a la base de datos sigefupro!");

            Statement stmt = conexion.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM usuarios");

            System.out.println("\n--- DATOS DE LA TABLA USUARIOS ---");
            while (rs.next()) {
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                System.out.println("ID: " + id + " - Nombre: " + nombre);
            }
            
            rs.close();
            stmt.close();
            conexion.close();

        } catch (Exception e) {
            System.out.println("¡Ocurrió un error en la conexión!");
            e.printStackTrace();
        }
    }
}