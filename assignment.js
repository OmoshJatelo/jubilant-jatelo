document.addEventListener("DOMContentLoaded", () => {
    // Select all items with the class "item"
    const menuItems = document.querySelectorAll(".item");

    // Create a modal for custom popups
    const modal = document.createElement("div");
    modal.id = "orderModal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modalImage" src="" alt="Meal Image">
            <p id="modalText"></p>
            <div class="modal-buttons">
                <button id="confirmOrder">Yes</button>
                <button id="cancelOrder">No</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
    const confirmButton = document.getElementById("confirmOrder");
    const cancelButton = document.getElementById("cancelOrder");
    const closeModal = document.querySelector(".close");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const flavor = item.querySelector(".flavor").textContent; // Get the flavor name
            const price = item.querySelector(".price").textContent; // Get the price
            const image = item.previousElementSibling.src; // Get the image source

            // Update modal content
            modalImage.src = image;
            modalText.textContent = `Do you want to order ${flavor} for $${price}?`;
            modal.style.display = "block";

            // Handle confirm order
            confirmButton.onclick = () => {
                alert(`You have successfully ordered ${flavor}. Please wait comfortably in your seat.`);
                modal.style.display = "none";
            };

            // Handle cancel order
            cancelButton.onclick = () => {
                alert(`You have successfully cancelled your order for ${flavor}.`);
                modal.style.display = "none";
            };
        });
    });

    // Close modal when clicking the close button
    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
