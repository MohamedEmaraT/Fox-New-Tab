// Get references to DOM elements
const selected = document.getElementById("selected");
const links = document.querySelectorAll("#linkSelect a");
const searchInput = document.getElementById("search");

// Update the selected search engine based on URL hash
const hash = window.location.hash.slice(1);
if (hash) {
    const selectedLink = document.querySelector(`#${hash}`);
    if (selectedLink) {
        selected.innerText = selectedLink.innerText;
        searchInput.placeholder = `search - ${selected.innerText}`;
    }
}

// Update the URL hash when an <a> tag is clicked
links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // prevent the link from navigating
        selected.innerText = link.innerText;
        searchInput.placeholder = `search - ${selected.innerText}`;
        window.location.hash = link.id;
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


    document.getElementById('emailForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert('Email sent successfully!');
                } else {
                    alert('Failed to send email.');
                }
            } catch (error) {
                alert('Error sending email: ' + error.message);
            }
        });
