# JavaScript Practice: Filling in the Missing Code

## Overview
Welcome to this JavaScript practice repository! The purpose of this exercise is to help you get familiar with JavaScript and enhance your skills by filling in missing code to complete two examples. These exercises involve reading data from a text file, dynamically updating the content of a web page, and interacting with dropdown menus.

## 🚀 Getting Started

### Fork and Clone Repository
To get started, fork this repository to your Github account and then clone the forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-user-name/CS100_Javascript.git
cd CS100_Javascript
```

### 📚 Example 1: Reading Data from a Text File
In Example1/index.html, your task is to complete the missing JavaScript code to read data from a file (data.txt) and display its content on the pre element in the web page.

#### 📝 Step 1: Starting the JavaScript Code Block
In HTML, to include JavaScript code, you need to start with a specific tag. This tag tells the browser that what follows is JavaScript.
Fill in the blank:
```html
????A????
``` 
🗝️ Hint: Think of the tag used to include JavaScript directly in an HTML file. 

#### 📝 Step 2: Fetching Data from a Text File
The fetch() function is used to request resources. Here, you want to fetch a file named data.txt that is in the same directory as your HTML file.
Fill in the blank:
```javascript
fetch(????B????)
```
🗝️ Hint: Since the file is in the same folder as your HTML file, you can simply use the file name. 

#### 📝 Step 3: Logging the Response to the Console
After successfully fetching the file, you'll receive its content in response. To confirm you've fetched the data correctly, log it to the console.
Fill in the blank:
```javascript
????C????
```
🗝️ Hint: To log something in JavaScript, use a function that starts with "console" and ends with "log". 

#### 📝 Step 4: Displaying the Data on the Web Page
You need to find the \<pre\> element in your HTML where you want to display the text. Use JavaScript to select this element by its id.
Fill in the blank:
```javascript
????D????.textContent = data;
```
🗝️ Hint: You can select an element by its `id` using `document.getElementById('id')`. 

#### 📝 Step 5: Ending the JavaScript Code Block
Remember to close the block of JavaScript code that you started in Step 1.
Fill in the blank:
```html
????E????
```
🗝️ Hint: This is the tag that indicates the end of the script.

---

### 📚 Example 2: Dynamic Dropdown Menu and History Display
In Example2/index.html, your task is to fill in the missing JavaScript code to achieve the following functionality:
- Populate a dropdown menu with options read from options.txt.
- When an option is selected, append the selected option to a "history" list displayed on the div element in the web page.

### Test Your Changes 
Open the HTML files in your browser to verify your solution.

### Commit and Push Your Changes
Commit your changes and push your changes to your remote repository. 
