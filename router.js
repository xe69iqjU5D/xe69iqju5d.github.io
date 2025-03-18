function updateContent() {
    let hash = window.location.hash.substring(2)
    let parts = hash.split('/');

    if (parts.length === 4) {
        let [carrier, state, lob, page] = parts;
        document.getElementById('output').innerHTML = `
            <h2>Carrier: ${carrier}</h2>
            <h2>State: ${state}</h2>
            <h2>LOB: ${lob}</h2>
            <h2>Page: ${page}</h2>
        `;
    } else {
        document.getElementById('output').innerHTML = `<h2>Invalid URL format</h2>`;
    }
}

window.addEventListener('hashchange', updateContent);

updateContent();
