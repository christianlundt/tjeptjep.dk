document.addEventListener("DOMContentLoaded", function() {
            const searchInput = document.getElementById("search");
            const cards = document.querySelectorAll(".card");

            searchInput.addEventListener("input", function() {
                const searchTerm = searchInput.value.toLowerCase();

                cards.forEach(card => {
                    const cardText = card.textContent.toLowerCase();
                    const dataFilter = card.getAttribute("data-filter");

                    if (cardText.includes(searchTerm) || dataFilter.includes(searchTerm)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });