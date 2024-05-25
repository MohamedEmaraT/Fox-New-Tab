// Get references to DOM elements
const selected = document.getElementById("selected");
const links = document.querySelectorAll("#linkSelect a");
const searchInput = document.getElementById("search");

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        selected.innerText = link.innerText
    });
});

const searchButton = document.querySelector("[type=submit]").addEventListener("click", function (event) {
    switch (selected.innerText) {
        case 'Google':
            window.open(`https://www.google.com/search?q=${encodeURIComponent(searchInput.value)}`, "_blank");
            break;
        case 'Bing':
            window.open(`https://www.bing.com/search?q=${encodeURIComponent(searchInput.value)}`, "_blank");
            break;
        case 'Yahoo':
            window.open(`https://search.yahoo.com/search?p=${encodeURIComponent(searchInput.value)}`, "_blank");
            break;
        case 'Ask':
            window.open(`https://www.ask.com/web?q=${encodeURIComponent(searchInput.value)}`, "_blank");
            break;
        default:
            window.open(`https://cse.google.com/cse?cx=01cc40cfca13b4128#q=lord&gsc.tab=0&gsc.q=${encodeURIComponent(searchInput.value)}&gsc.sort=`, "_blank");
            break;
    }
});

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
