fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        const main = document.getElementById("test");
        const products = data.products;
        const input = document.getElementById("filterInput");
        const sortSelect = document.getElementById("sort");

        const renderProducts = (list) => {
            main.innerHTML = "";
            list.forEach((element) => {
                let product = document.createElement("div");
                product.classList.add("row");

                let container1 = document.createElement("div");
                container1.classList.add("cell");
                let tytul = document.createElement("div");
                tytul.innerHTML = element.title;
                tytul.classList.add("text-table");
                container1.appendChild(tytul);

                let container2 = document.createElement("div");
                container2.classList.add("cell");
                let opis = document.createElement("div");
                opis.innerHTML = element.description;
                opis.classList.add("text-table");
                container2.appendChild(opis);

                let container3 = document.createElement("div");
                container3.classList.add("cell");
                let img = document.createElement("img");
                img.src = element.thumbnail;
                img.height = 150;
                container3.appendChild(img);

                product.appendChild(container1);
                product.appendChild(container2);
                product.appendChild(container3);

                product.setAttribute("data-search", element.title.toLowerCase());
                main.appendChild(product);
            });
        };

        renderProducts(products.slice(0, 30)); // Pierwsze renderowanie

        input.addEventListener("input", (e) => {
            const filter = e.target.value.toLowerCase();
            document.querySelectorAll("#test .row").forEach((row) => {
                const content = row.getAttribute("data-search");
                if (content.includes(filter)) {
                    row.style.display = "grid";
                } else {
                    row.style.display = "none";
                }
            });
        });

        sortSelect.addEventListener("change", () => {
            const selectedOption = sortSelect.value;
            let sortedProducts;

            if (selectedOption === "asc") {
                sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
            } else if (selectedOption === "desc") {
                sortedProducts = [...products].sort((a, b) => b.title.localeCompare(a.title));
            } else {
                sortedProducts = products.slice(0, 30); // Przywracanie oryginalnej kolejności
            }

            renderProducts(sortedProducts);
        });
    });