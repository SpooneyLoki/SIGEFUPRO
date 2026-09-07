import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ClienteService from "../services/ClienteService";

export default function ClienteTable() {
    const [clientes, setClientes] = useState([]);

    const cargarClientes = () => {
        ClienteService.listarClientes()
            .then((response) => {
                setClientes(response.data);
            })
            .catch((error) => {
                console.log("Error al cargar los usuarios:", error);
            });
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    const actionBodyTemplate = (rowData) => {
        return (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
            </div>
        );
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#10b981', fontSize: '1.5rem', margin: 0 }}>
                    Sistema de Gestión de Usuarios
                </h2>
                <Button label="[ Nuevo Usuario ]" icon="pi pi-user-plus" style={{ backgroundColor: '#10b981', border: 'none', color: '#0b0f19', fontWeight: 'bold' }} />
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
                    <Column field="id" header="ID" style={{ width: '20%' }}></Column>
                    <Column field="nombre" header="Nombre" style={{ width: '40%' }}></Column>
                    <Column field="password" header="Contraseña" style={{ width: '25%' }}></Column>
                    <Column header="Acciones" body={actionBodyTemplate} style={{ width: '15%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}