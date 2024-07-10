document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const details = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        nickname: document.getElementById('nickname').value,
        university: document.getElementById('university').value,
        course: document.getElementById('course').value,
        branch: document.getElementById('branch').value,
        yearOfPassing: document.getElementById('year-of-passing').value,
        cgpa: document.getElementById('cgpa').value
    };

    // Save details to localStorage
    localStorage.setItem('userDetails', JSON.stringify(details));

    // Provide feedback to the user
    alert('Details saved successfully!');
});
