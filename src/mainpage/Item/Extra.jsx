import { useState, useEffect} from "react"
import Information from "./element/Information"
import Image from "./element/Image"

import DesktopStyles from "./Item.module.css"
import MobileStyles from "./MobileItem.module.css"
import { useCart } from "../../main"

export default function Extra({props, UpdateOutFit, resetTrigger}) {

    const [selectedItemA, setSelectedItemA] = useState(null)
    const [selectedItemB, setSelectedItemB] = useState(null)
    const { isMobile } = useCart()
    const styles = isMobile ? MobileStyles : DesktopStyles

    const pickItemA = (index, inventory) => {

        const selected = inventory[index]

        const category = "bow"

        const zIndex = props.zIndex

        setSelectedItemA(selectedItemA === selected ? null : selected);
        
        UpdateOutFit(selected, category, zIndex)

    }

    const pickItemB = (index, inventory) => {

        const selected = inventory[index]

        const category = "bag"

        const zIndex = props.zIndex

        setSelectedItemB(selectedItemB === selected ? null : selected);
        
        UpdateOutFit(selected, category, zIndex)

    }

    useEffect(() => {

        setSelectedItemA(null)
        setSelectedItemB(null)

    }, [resetTrigger])

    return (
        <div className={styles.inventory}>
            <Information 
                name={props.name} 
                selectedItem={selectedItemA}
                isChoosen={null} 
                itemSection={null} 
            />
            <Image 
                name={props.name}
                inventory={props.inventoryA}
                selectedItem={selectedItemA}
                pickItem={pickItemA}
            />
            <Image 
                name={props.name}
                inventory={props.inventoryB}
                selectedItem={selectedItemB}
                pickItem={pickItemB}
            />
        </div>
    )
}