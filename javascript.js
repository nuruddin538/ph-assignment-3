function expandCard(card) {
    // Hide all other expanded cards
    const expandedCards = document.querySelectorAll(".card.expanded");
    expandedCards.forEach((expandedCard) => {
        if (expandCard !== card) {
            expandCard.classList.remove("expanded");
        }
    });
    // Show the expanded card container
    const expandedCardContainer = document.querySelector(".expanded-card-container");
    expandedCardContainer.style.display = "flex";
    // Update the content of the expanded card
    const title = card.querySelector("img").innerText;
    const content = card.querySelector(".content").innerText;
    const expandedCardTitle = document.getElementById("expandedCardTitle");
    const expandCardTitle = document.getElementById("expandedCardContent");
    expandedCardTitle.innerText = title;
    expandedCardContent.innerText = content;
}
function closeExpandedCard() {
    // Hide the expanded card container
    const expandedCardContainer =
        document.querySelector(".expanded-card-container");
    expandedCardContainer.style.display = "none";
    // Hide all expanded cards
    const expandCards = document.querySelectorAll(".card.expanded");
    expandCards.forEach((expandCard) => {
        expandedCard.classList.remove("expanded");
    })
}