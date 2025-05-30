import { useState, useEffect, useRef } from "react"
import styles from "./folder.module.css"


export default function Size({section, selectedItem, isChoosen, 
    itemSection, updateSize, sizeSelected, setSizeSelected, 
    missingSize, isMissingSize, setMissingSize}) {

    const [isHovered, setIsHovered] = useState(false)
    const [, setPosition] = useState({x: 0, y:0})
    const hoverTimeoutRef = useRef(null);
    const sizeRefs = useRef([])
    
    const pickSize = (index) => {
        
        setSizeSelected((prev) => {

            if (prev === index) {

                return null

            } else {

                return index
                
            }
            
        })
    };

    useEffect(() => {

        sizeSelected === null ? updateSize(section, null) : updateSize(section, selectedItem.sizes[sizeSelected])

        if (isMissingSize) {

            const missingSizes = missingSize.filter(item => item !== section)

            setMissingSize(missingSizes)
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sizeSelected])

    useEffect(() => setSizeSelected(null), [selectedItem, setSizeSelected]);

    useEffect(() => {
        if (isMissingSize && sizeRefs.current.length > 0) {
            // Find the first missing size and scroll to it
            console.log('hello')
            const missingIndex = selectedItem.sizes.findIndex(
                () => missingSize.includes(section) && sizeSelected === null
            );
            if (missingIndex !== -1 && sizeRefs.current[missingIndex]) {
                sizeRefs.current[missingIndex].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    }, [isMissingSize, missingSize, section, selectedItem, sizeSelected]);

    const handleMouseEnter = (e) => {

        setPosition({ x: e.clientX, y: e.clientY });

        if (!isHovered) {

            hoverTimeoutRef.current = setTimeout(() => {
                setIsHovered(true);
            }, 240);
        }

    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeoutRef.current)
        setIsHovered(false)
    }

    const isOpen = selectedItem && isChoosen === itemSection

    if (!isOpen) return null

    const buttonStyle = (isMissingSize, sizeSelected, index) => {
        return {
            border: isMissingSize ? "1px solid red" : 
            sizeSelected === index ? "1px solid #331D1C" : "none",
        }
    };

    return (
        <div className={styles.size}>
            <h4> Size </h4>
            <div className={styles.options}>
                {selectedItem.sizes.map((size, index) => (
                    <div key={index} className={styles.option}
                        style={buttonStyle(isMissingSize, sizeSelected, index)}
                        onClick={() => pickSize(index)}
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        onMouseLeave={() => handleMouseLeave()}
                        ref={(el) => (sizeRefs.current[index] = el)}>
                            <p>{size}</p>
                    </div>
                ))}
                {isMissingSize ? <div className={styles.warning}> *Bắt buộc chọn</div> : null}
            </div>
            
            {/* {isHovered && (
                <div
                    style={{
                        position: "fixed",
                        top: position.y + 12,
                        left: position.x + 12,
                        backgroundColor: "#444444",
                        color: "white",
                        padding: "7px",
                        borderRadius: "8px",
                        pointerEvents: "none",
                        whiteSpace: "nowrap", // Prevents blocking other elements
                    }}
                    >
                    Vai 39 - Ngực 90 - Dài 62
                </div>
            )} */}
        </div> 
    )
}
