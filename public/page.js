// Get references to DOM elements
const selected = document.getElementById("selected");
const links = document.querySelectorAll("#linkSelect a");
const searchInput = document.getElementById("search");

// Update the selected search engine when an <a> tag is clicked
links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // prevent the link from navigating
        selected.innerText = link.innerText;
        searchInput.placeholder = `search - ${selected.innerText}`
    });
});

// Open the search engine with the user's search query when the form is submitted
function openLink(event) {
    event.preventDefault(); // prevent the form from submitting
    const selectedLink = document.querySelector(`#search_${selected.innerText}`);
    const query = searchInput.value;
    const searchUrl = selectedLink.href + encodeURIComponent(query);
    window.open(searchUrl, "_blank");
}

// Attach the form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", openLink);

const downloadBtn = document.getElementById('click');
const dropMenu = document.getElementById('drop');

downloadBtn.addEventListener('click', () => {
    if (dropMenu.style.display === 'none') {
        dropMenu.style.display = 'flex';
    } else {
        dropMenu.style.display = 'none';
    }
});

