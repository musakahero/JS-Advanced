function solve() {
    let inputs = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birthDate: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }
    let tableBody = document.getElementById('tbody');
    let budgetMsg = document.getElementById('message');
    let budget = document.getElementById('sum');
    let budgetTotal = 0;
    let hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', onHire);

    function onHire(ev) {
        ev.preventDefault();
        //keep values
        let firstName = inputs.firstName.value;
        let lastName = inputs.lastName.value;
        let email = inputs.email.value;
        let birthDate = inputs.birthDate.value;
        let position = inputs.position.value;
        let salary = inputs.salary.value;

        //validate
        for (const item in inputs) {
            if (inputs[item].value == '') {
                return
            }
        }

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${birthDate}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`
        tableBody.appendChild(tr);

        clearInput();
        budgetTotal += Number(salary);
        budget.textContent = budgetTotal.toFixed(2);
        let firedBtn = tr.querySelector('button.fired');
        let editBtn = tr.querySelector('button.edit');
        firedBtn.addEventListener('click', onFired);
        editBtn.addEventListener('click', onEdit);

        function onFired() {
            tr.remove();
            budgetTotal -= salary;
            budget.textContent = budgetTotal.toFixed(2);
        };

        function onEdit() {
            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.email.value = email;
            inputs.birthDate.value = birthDate;
            inputs.position.value = position;
            inputs.salary.value = salary;
            tr.remove();
            budgetTotal -= salary;
            budget.textContent = budgetTotal.toFixed(2); 
        };

    }

    function clearInput() {
        for (const el in inputs) {
            inputs[el].value = ''
        }
    }

}
solve()