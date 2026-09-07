import Header from './components/shared/Header';
import ClienteTable from './components/client/ClienteTable';
import './app.css';

export default function App() {
    return (
        <div style={{ backgroundColor: "#0b0f19", minHeight: "100vh", color: "#fff" }}>
            <Header />
            <ClienteTable />
        </div>
    );
}