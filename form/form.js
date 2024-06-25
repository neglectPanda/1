document.addEventListener('DOMContentLoaded', () => {
    //address
    const address = document.getElementById('address');
    const addAddress = document.getElementById('add-address');
    //contact info number
    const numberContainer = document.getElementById('number-container');
    const addNumBtn = document.getElementById('add-number');
    //contact info email
    const emailContainer = document.getElementById('email-container');
    const addEmailBtn = document.getElementById('add-email');
    //education
    const educationContainer = document.getElementById('education-container');
    const addEducationBtn = document.getElementById('add-more-edu');

    //for add address button
    let addressCount = 2;
    const addNewAddress = () => {
        const newAddress = document.createElement('div');
        newAddress.innerHTML = `
            <div class="head-btn">
                <h3 class="label address-label">Address ${addressCount}</h3>
                <button type="button" class="btn delete-btn">Delete</button>
            </div>

            <div class="row">
                <div class="address-column">
                    <label for="country-${addressCount}" class="label2">Country</label>
                    <input type="text" name="country-${addressCount}" id="country-${addressCount}" />
                </div>
                <div class="address-column">
                    <label for="province-state-${addressCount}" class="label2">Province/State</label>
                    <input type="text" name="province-state-${addressCount}" id="province-state-${addressCount}" />
                </div>
                <div class="address-column">
                    <label for="city-municipality-${addressCount}" class="label2">City/Municipality</label>
                    <input type="text" name="city-municipality-${addresCount}" id="city-municipality-${addressCount}" />
                </div>
            </div>
            <div class="street-container">
                <label for="street" class="label2">Street</label>
                <input type="text" name="street" id="street">
            </div>
        `;
        const deleteBtn = newAddress.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            newAddress.remove();
            addressCount--;
        });

        address.appendChild(newAddress);
        addressCount++;
    }

    //for contact info add button
    let numberCount = 2;
    const addNewNumber = () => {
        const newNumber = document.createElement('div');
        newNumber.innerHTML = `
            <div class="head-btn">
                <h3 class="label"></h3>
                <button type="button" class="btn delete-btn">Delete</button>
            </div>
            <div class="container4">
                <label for="number-${numberCount}" class="label2 label3">Number ${numberCount}</label>
                <input type="tel" id="number-${numberCount}" name="number-${numberCount}" placeholder="123-45-678" />
            </div>
        `
        numberContainer.appendChild(newNumber);
        numberCount++;

        const deleteBtn = newNumber.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            newNumber.remove();
            numberCount--;
        });
    };

    // for email add btn
    let emailCount = 2;
    const addNewEmail = () => {
        const newEmail = document.createElement('div');
        newEmail.innerHTML = `
            <div class="head-btn">
                <h3 class="label"></h3>
                <button type="button" class="btn delete-btn">Delete</button>
            </div>
            <div class="container4">
                <label for="email-${emailCount}" class="label2 label3">Email ${emailCount}</label>
                <input type="email" id="email-${emailCount}" name="email-${emailCount}" placeholder="johndoe@gmail.com" />
            </div>
        `;
        emailContainer.appendChild(newEmail);
        emailCount++;

        const deleteBtn = newEmail.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            newEmail.remove();
            emailCount--;
        });
    };

    //for education part
    let educationCount = 2;
    const addNewEdu = () => {
        const newEdu = document.createElement('div');
        newEdu.innerHTML = `
            <div class="head-btn">
                <h3 class="label"></h3>
                <button type="button" class="btn delete-btn">Delete</button>
            </div>
            <div class="row">
                <div class="column">
                    <label for="school-attended-${educationCount}" class="label">School Attended</label>
                    <input type="text" name="school-attended-${educationCount}" id="school-attended-${educationCount}" />
                </div>
                <div class="column">
                    <label for="school-year-${educationCount}" class="label">School Year</label>
                    <input type="text" name="school-year-${educationCount}" id="school-year-${educationCount}" />
                </div>
                <div class="column">
                    <label for="program-${educationCount}" class="label">School Attended</label>
                    <input type="text" name="program-${educationCount}" id="program-${educationCount}" />
                </div>
            </div>
        `;
        educationContainer.appendChild(newEdu);
        educationCount++;

        const deleteBtn = document.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            newEdu.remove();
            educationCount--;
        }); 
    };

    addAddress.addEventListener('click', addNewAddress);
    addNumBtn.addEventListener('click', addNewNumber);
    addEmailBtn.addEventListener('click', addNewEmail);
    addEducationBtn.addEventListener('click', addNewEdu);
});