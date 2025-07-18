
import { X } from 'lucide-react';
import styles from '../checkout.module.css';


export default function DenyButton({setEditMode}) {

    const handleSubmit = () => {
        setEditMode(false)
    };

    return (
        
        <div style={{ textAlign: "center", margin: "1rem" }}>
            <button style={{backgroundColor: "#331D1C", width: "fit-content", margin: "0 auto", padding: "0.5em", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "50%", marginBottom:"0.5em", cursor: "pointer"}}
                onClick={handleSubmit} >
                <X size={20} color="#FFFFFF"  />
            </button>
            <p className={styles.copyable}>
                Hủy bỏ
            </p>
        </div>

    );
    


}