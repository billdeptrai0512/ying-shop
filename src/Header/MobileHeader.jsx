import styles from "./MobileHeader.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../main"

export default function MobileHeader() {

    const { cart } = useCart()

    const [numberOfCart, setNumberOfCart] = useState(0)

    useEffect(() => {

        setNumberOfCart(cart.length)

    }, [cart])

    return (
        <header className={styles.header}>

            <div className={styles.banner}>
                <Link to={`/`}>
                    <p>❤ Ying Ying - Tiệm thuê đồ cosplay, seifuku ❤</p> 
                </Link>
            </div>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <h1>YING YING COSPLAY SHOP</h1>
                    <p>Tự phối seifuku theo style của bạn! ❤️</p>
                </div>
                {/* <div className={styles.contact}>
                    <Link className={styles.cartLink} to={`/cart`}>
                            CART 
                            {
                            cart.length === 0 ? null :
                            <span style={{ color: '#DC1E1E' }}> ( {numberOfCart} )</span>
                            } 
                    </Link>
                    <div className={styles.middle}>FANPAGE</div>
                    <div>TIKTOK</div>
                </div> */}
            </div>

        </header>
    )
}