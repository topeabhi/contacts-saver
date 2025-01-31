// app.js
const form = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

let contacts = [];

// Create (Add Contact)
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const contact = { id: Date.now(), name, email, phone };
    contacts.push(contact);

    renderContacts();
    form.reset();
});

// Read (Render Contacts)
function renderContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${contact.name} (${contact.email}, ${contact.phone})</span>
            <div>
                <button onclick="editContact(${contact.id})">Edit</button>
                <button onclick="deleteContact(${contact.id})">Delete</button>
            </div>
        `;
        contactList.appendChild(li);
    });
}

// Update (Edit Contact)
function editContact(id) {
    const contact = contacts.find((c) => c.id === id);

    document.getElementById("name").value = contact.name;
    document.getElementById("email").value = contact.email;
    document.getElementById("phone").value = contact.phone;

    deleteContact(id);
}

// Delete (Remove Contact)
function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
    renderContacts();
}
