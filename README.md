LifeWay Coding Challenge for Entry Level Software Engineer. 

I am giving a detailed account of my thought process, as well as the code input.  Because of my current job, my coding time I had set aside to fully complete the challenge, was more limited than I would have liked.  I need another a little bit more time to complete the 'count' portion!  But here is what I have: 

Visual Studio Code was started. (I currently use a MacBook Air or a Dell Inspirion Touch Laptop-I am familiar with coding in both).   
A mkdir 'lifeway' was created. 
'npm init' command given, fields in 'package.json' completed.  
'dependencies' added inside 'package.json'=body-parser and express.
npm install was run which established the 'node_modules' folder. 

Basic coding in server.js input to use express and body-parser as well as to set up a local server.  First the requirements are listed.  Then those requirements are initialized.  Then the GET and POST requests can be defined.  In this assignment, I created a basic .json object db in a file called 'db.json'.  It lists several 'id' key-value pairs and several random 'message' value pairs of course in JavaScript Object Notation.   
Duplicate IDs must be excluded, however, POSTMAN automatically assigns the IDs in this example and I have not run across any duplicates in my GET, POST, DELETE request tests.  
Word count of 'total count' shall display in the server with the single endpoint /wordcount. - Unfinished 
The assignment is asking for only one endpoint so I do not need to do an add function or an input button that connects to a database server, like mongoDB.  So, for this assignment it will only count the words I have already input and display the value.  Because the assignment does not specify a database, I do not think I need to parse or stringify the data in the GET and PUSH requests.

Using json-server --watch db.json to monitor the local host.  
Using POSTMAN to make GET and POST requests.  

Need to complete 'id' and 'message' fuction of counting the words in ALL the messages, so far.  