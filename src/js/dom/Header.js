class Header {
    constructor() {
        this.header = document.createElement("header");

        this.searchDiv = document.createElement("div");

        this.searchInput = document.createElement("input");
        this.searchInput.classList.add("city-search");
        this.searchInput.placeholder = "Enter A City";

        this.searchButton = document.createElement("button");
        this.searchButton.classList.add("btn-search", "btn");
        this.searchButton.innerText = "SEARCH";

        this.searchDiv.append(this.searchInput, this.searchButton);
        this.header.appendChild(this.searchDiv);

        const body = document.querySelector("body")
        body.innerHTML = "";
        body?.appendChild(this.header);
    }
}

export default Header;