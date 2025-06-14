import { useState } from "react";
import { useCart } from "../public/cartContext"
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./cart.module.css"
import Outfit from "../cart/outfit";
import Total from "../cart/total";
import Demo from "../cart/demo";
import FormPlaceOrder from "./form/placeOrder";

export default function ConfirmOrder() {

    const { cart , removeOutFit, editOutFit} = useCart()

    const [selectedOutFit, setSelectedOutFit] = useState(0)

    const pickOutFit = (index) => setSelectedOutFit(index)

    const navigate = useNavigate()

    const isDeskop = useMediaQuery({ query: '(min-width: 1400px)'})

    if (isDeskop) {
        return (
            <>
                <section className={styles.main}>
                   <Demo cart={cart} selectedOutFit={selectedOutFit} />
                </section>
                <section className={styles.primary}>
                    <Outfit 
                        cart={cart} 
                        pickOutFit={pickOutFit}
                        removeOutFit={removeOutFit}
                        editOutFit={editOutFit}/>
                </section>
                <section className={styles.checkout}>
                    <FormPlaceOrder cart={cart} selectedOutFit={selectedOutFit} formId={"placeOrderForm"} />
                    <div className={styles.submit}>
                        <Total cart={cart} selectedOutFit={selectedOutFit}></Total>
                        <button className={styles.back} onClick={() => navigate('/')}>TRỞ VỀ</button> 
                        <button className={styles.cta} type="submit" form="placeOrderForm">THANH TOÁN</button> 
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <section className={styles.main}>
                <Demo cart={cart} selectedOutFit={selectedOutFit} />
            </section>
            <section className={styles.primary}>
                <Outfit 
                    cart={cart} 
                    pickOutFit={pickOutFit}
                    removeOutFit={removeOutFit}
                    editOutFit={editOutFit}/>
            </section>
            <section className={styles.checkout}>
                <div className={styles.submit}>
                    <Total cart={cart} selectedOutFit={selectedOutFit}></Total>
                    <button className={styles.back} onClick={() => navigate('/')}>TRỞ VỀ</button> 
                    <button className={styles.cta} onClick={() => navigate('/cart/placeorder')}>CHỌN NGÀY THUÊ</button> 
                </div>
            </section>
        </>
    );
}