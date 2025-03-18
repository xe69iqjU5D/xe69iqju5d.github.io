function updateContent() {
    let hash = window.location.hash.substring(2);
    let parts = hash.split('/');

    if (parts.length === 4) {
        let [carrier, state, lob, page] = parts;
        document.getElementById('output').innerHTML = `
            <p>Carrier: ${carrier}</p>
            <p>State: ${state}</p>
            <p>LOB: ${lob}</p>
            <p>Page: ${page}</p>
        `;
    } else {
        document.getElementById('output').innerHTML = "";
    }
}

window.addEventListener('hashchange', updateContent);
updateContent();
