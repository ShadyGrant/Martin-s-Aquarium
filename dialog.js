const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
            const dialogElement = theEvent.target.parentNode
            dialogElement.close()
        }
        )
    }
    // CAN'T TOUCH THIS - END
    // You will be writing code below this line






    document.querySelector("#button--dede").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dede")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--nene").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--nene")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--keke").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--keke")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--sese").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--sese")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--fefe").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--fefe")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--rere").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--rere")
            theDialog.showModal()
        }
    )
}



export default initializeDetailButtonEvents;