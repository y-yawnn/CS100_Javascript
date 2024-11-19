// Fetch the content of the file data.txt 
fetch('data.txt')
.then(response => response.text())
.then(data => {
    // Display the content to the console
    console.log(data)
    // Display content on the page in the HTML element with id output
    document.getElementById('output').textContent = data; // Display content on the page
})
.catch(error => console.error('Error reading file:', error));
// End a block of Javascript code