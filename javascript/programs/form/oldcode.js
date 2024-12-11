let olddata = JSON.parse(localStorage.getItem('contactDetails')) || [];
let editIndex = null;

function storedata(e) {
    e.preventDefault();  // Prevent form submission if validation fails

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const city = document.getElementById('city').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const state = document.getElementById('state').value;
    const num = document.getElementById('num');
    const email = document.getElementById('email');

    // Perform validation before proceeding
    if (!firstname || !lastname || !num.checkValidity() || !email.checkValidity()) {
        alert("Please fill in all fields correctly!");
        return;
    }

    // Create contact details object
    const contactDetails = {
        "firstname": firstname,
        "lastname": lastname,
        "city": city,
        "address1": address1,
        "address2": address2,
        "state": state,
        "num": num.value,
        "email": email.value
    };

    // Check if we are editing or adding a new contact
    if (editIndex !== null) {
        // Update the contact
        olddata[editIndex] = contactDetails;
        alert("Details updated successfully!");
        editIndex = null;
        document.getElementById("submit").innerText = "Save Contact";  // Reset button text
    } else {
        // Add new contact
        olddata.push(contactDetails);
        alert("Contact details saved successfully!");
    }

    // Update localStorage with the modified data
    localStorage.setItem('contactDetails', JSON.stringify(olddata));
    document.getElementById('contactForm').reset();
    renderTable();
}

const tbody = document.querySelector("tbody");

tbody.addEventListener("click", (e) => {
    if (e.target.id === "del") {
        const row = e.target.closest("tr");
        const index = row.dataset.index;
        olddata.splice(index, 1); // Remove the contact from the array
        localStorage.setItem("contactDetails", JSON.stringify(olddata));
        row.remove(); // Remove the row from the table
        console.log("Row removed from table and localStorage updated");
        renderTable();
    }

    if (e.target.id === "edit") {
        const row = e.target.closest("tr");
        editIndex = row.dataset.index; // Set the edit index
        const contact = olddata[editIndex];
        
        // Populate the form with the existing contact's details
        document.getElementById("firstname").value = contact.firstname;
        document.getElementById("lastname").value = contact.lastname;
        document.getElementById("city").value = contact.city;
        document.getElementById("address1").value = contact.address1;
        document.getElementById("address2").value = contact.address2;
        document.getElementById("state").value = contact.state;
        document.getElementById("num").value = contact.num;
        document.getElementById("email").value = contact.email;
        
        document.getElementById("submit").innerText = "Update Contact"; // Change button text to "Update"
        renderTable();
    }
});

// Add validation for phone number and email fields
document.getElementById('num').addEventListener('input', (e) => {
    if (e.target.value.length !== 10) {
        e.target.setCustomValidity("Phone number must be exactly 10 digits.");
    } else {
        e.target.setCustomValidity(""); // Reset custom validity if valid
    }
});

document.getElementById('email').addEventListener('input', (e) => {
    if (olddata.some(contact => contact.email === e.target.value)) {
        e.target.setCustomValidity("Email already exists.");
    } else {
        e.target.setCustomValidity(""); // Reset custom validity if valid
    }
});

document.getElementById('firstname').addEventListener('input', (e) => {
    if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        e.target.setCustomValidity("Name must only contain letters.");
    } else {
        e.target.setCustomValidity(""); // Reset custom validity if valid
    }
});

document.getElementById('lastname').addEventListener('input', (e) => {
    if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        e.target.setCustomValidity("Name must only contain letters.");
    } else {
        e.target.setCustomValidity(""); // Reset custom validity if valid
    }
});

function renderTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    olddata.forEach((contact, index) => {
        const row = document.createElement("tr");
        row.dataset.index = index; // Store index in dataset for each row
        row.innerHTML = `
            <td>${contact.firstname}</td>
            <td>${contact.lastname}</td>
            <td>${contact.city}</td>
            <td>${contact.address1}</td>
            <td>${contact.address2}</td>
            <td>${contact.state}</td>
            <td>${contact.num}</td>
            <td>${contact.email}</td>
            <td><button id="edit">Edit</button></td>
            <td><button id="del">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

renderTable();