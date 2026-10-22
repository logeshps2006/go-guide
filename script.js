// Get search elements
const searchInput = document.querySelector(".hero input");
const searchButton = document.querySelector(".hero button");

// Get all destination cards
const destinationCards = document.querySelectorAll(".card");

// Search destinations
function searchDestinations() {
    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim().toLowerCase();
    let foundCount = 0;

    // Remove previous message
    const oldMessage = document.getElementById("search-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    // Show all destinations when search is empty
    if (searchText === "") {
        destinationCards.forEach(function (card) {
            card.style.display = "";
        });
        return;
    }

    // Filter destination cards
    destinationCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
            foundCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Show search result message
    const message = document.createElement("p");
    message.id = "search-message";
    message.style.marginTop = "20px";
    message.style.fontWeight = "bold";

    if (foundCount > 0) {
        message.textContent =
            foundCount + " destination(s) found! Explore Tamil Nadu!";
        message.style.color = "#087443";
    } else {
        message.textContent =
            "No destination found. Try Ooty, Chennai, Madurai or Kodaikanal.";
        message.style.color = "#c0392b";
    }

    const placesSection = document.querySelector(".places");

    if (placesSection) {
        placesSection.prepend(message);
        placesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Search button click
if (searchButton) {
    searchButton.addEventListener("click", searchDestinations);
}

// Search by pressing Enter
if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchDestinations();
        }
    });

    // Restore all cards when search is cleared
    searchInput.addEventListener("input", function () {
        if (searchInput.value.trim() === "") {
            destinationCards.forEach(function (card) {
                card.style.display = "";
            });

            const message = document.getElementById("search-message");

            if (message) {
                message.remove();
            }
        }
    });
}

console.log("Go Guide website loaded successfully!");
