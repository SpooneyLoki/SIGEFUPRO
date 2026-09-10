import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import ClienteService from "../services/ClienteService";

export default function ClienteTable() {
    const [clientes, setClientes] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [correo, setCorreo] = useState("");

    // Cargar la lista de usuarios desde la API
    const cargarClientes = () => {
        ClienteService.listarClientes()
            .then((response) => {
                setClientes(response.data);
            })
            .catch((error) => {
                console.log("Error al cargar los usuarios:", error);
            });
    };

    // Guardar un nuevo usuario con correo
    const agregarUsuario = () => {
        if (!nombre.trim() || !password.trim() || !correo.trim()) {
            alert("Por favor completa todos los campos");
            return;
        }

        const nuevoUsuario = { nombre, password, correo };

        ClienteService.guardarCliente(nuevoUsuario)
            .then(() => {
                cargarClientes();
                setMostrarModal(false);
                setNombre("");
                setPassword("");
                setCorreo("");
            })
            .catch((error) => {
                console.log("Error al guardar el usuario:", error);
            });
    };

    // Eliminar un usuario por ID
    const eliminarUsuario = (id) => {
        ClienteService.eliminarCliente(id)
            .then(() => {
                cargarClientes();
            })
            .catch((error) => {
                console.log("Error al eliminar el usuario:", error);
            });
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    // Botones de acción
    const actionBodyTemplate = (rowData) => {
        return (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button 
                    icon="pi pi-trash" 
                    className="p-button-rounded p-button-danger p-button-sm" 
                    onClick={() => eliminarUsuario(rowData.id)}
                />
            </div>
        );
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#10b981', fontSize: '1.5rem', margin: 0 }}>
                    Sistema de Gestión de Usuarios
                </h2>
                <Button 
                    label="[ Nuevo Usuario ]" 
                    icon="pi pi-user-plus" 
                    onClick={() => setMostrarModal(true)}
                    style={{ backgroundColor: '#10b981', border: 'none', color: '#0b0f19', fontWeight: 'bold' }} 
                />
            </div>

            <div className="card" style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                <DataTable 
                    value={clientes} 
                    stripedRows 
                    paginator 
                    rows={5} 
                    responsiveLayout="scroll" 
                    emptyMessage="No existen usuarios registrados"
                >
                    <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                    <Column field="nombre" header="Nombre" style={{ width: '30%' }}></Column>
                    <Column field="correo" header="Correo" style={{ width: '30%' }}></Column>
                    <Column field="password" header="Contraseña" style={{ width: '20%' }}></Column>
                    <Column header="Acciones" body={actionBodyTemplate} style={{ width: '10%' }}></Column>
                </DataTable>
            </div>

            {/* Modal para Agregar Usuario */}
            <Dialog 
                header="Registrar Nuevo Usuario" 
                visible={mostrarModal} 
                style={{ width: '400px' }} 
                onHide={() => setMostrarModal(false)}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nombre</label>
                        <InputText 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            placeholder="Ej: Carlos"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Correo</label>
                        <InputText 
                            type="email"
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                            placeholder="ejemplo@correo.com"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contraseña</label>
                        <InputText 
                            type="password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="******"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                        <Button label="Cancelar" className="p-button-text" onClick={() => setMostrarModal(false)} />
                        <Button label="Guardar" icon="pi pi-check" onClick={agregarUsuario} style={{ backgroundColor: '#10b981', border: 'none' }} />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}