let olddata = JSON.parse(localStorage.getItem('contactDetails')) || [];
let editIndex = null;

function storedata(e) {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const city = document.getElementById('city').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const state = document.getElementById('state').value;
    const num = document.getElementById('num');
    const email = document.getElementById('email');


    // Checks if phone and email are valid before storing data
    if (!num.checkValidity() || !email.checkValidity() || !firstnameInput.checkValidity() || !lastnameInput.checkValidity()) {
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

    // Store in localStorage
    if (editIndex !== null) {
        olddata[editIndex] = contactDetails;
        alert("Details updated successfully!");
        editIndex = null;
        document.getElementById("submit").innerText = "Save Contact";  
    } else {
        olddata.push(contactDetails);
        alert("Contact details saved successfully!");
    }

    localStorage.setItem('contactDetails', JSON.stringify(olddata));
    document.getElementById('contactForm').reset();
    renderTable();
}

const tbody = document.querySelector("tbody");
tbody.addEventListener("click", (e) => {
    if (e.target.id === "del") {
        const row = e.target.closest("tr");
        const index = row.dataset.index;
        olddata.splice(index, 1); 
        localStorage.setItem("contactDetails", JSON.stringify(olddata));
        row.remove();
        alert("Removed Contact");
        renderTable();
    }

    if (e.target.id === "edit") {
        const row = e.target.closest("tr");
        editIndex = row.dataset.index; 
        const contact = olddata[editIndex];
        document.getElementById("firstname").value = contact.firstname;
        document.getElementById("lastname").value = contact.lastname;
        document.getElementById("city").value = contact.city;
        document.getElementById("address1").value = contact.address1;
        document.getElementById("address2").value = contact.address2;
        document.getElementById("state").value = contact.state;
        document.getElementById("num").value = contact.num;
        document.getElementById("email").value = contact.email;
        document.getElementById("submit").innerText = "Update Contact"; 
        renderTable();
    }
});

    // Phone number validation
    num.addEventListener('input', () => {
        if (num.value.length !== 10) {
            num.setCustomValidity("Phone number must be exactly 10 digits.");
        } else {
            num.setCustomValidity("");
        }
    });

    // Only letters validation
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    firstnameInput.addEventListener('input', () => {
        if (!/^[a-zA-Z]+$/.test(firstnameInput.value)) {
            firstnameInput.setCustomValidity("Name must only contain letters.");
        } else {
            firstnameInput.setCustomValidity("");
        }
    });

    lastnameInput.addEventListener('input', () => {
        if (!/^[a-zA-Z]+$/.test(lastnameInput.value)) {
            lastnameInput.setCustomValidity("Name must only contain letters.");
        } else {
            lastnameInput.setCustomValidity("");
        }
    });

    // Checks if email is already stored in localStorage
    email.addEventListener('input', () => {
        if (olddata.some(contact => contact.email === email.value)) {
            email.setCustomValidity("Email already exists.");
        } else {
            email.setCustomValidity("");
        }
    });


function renderTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    olddata.forEach((contact, index) => {
        const row = document.createElement("tr");
        row.dataset.index = index; 
        row.innerHTML = `
            <td>${index}</td>
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




//task
//data stored in array format
//data fetched and display in table
//added css to the table
//added email validation (must be unique from the stored in local storage)
//remove the view button
//added a promt that phone number must be 10 digits
//added a prompt that email must be in the correct format
//Added delete operation


   

