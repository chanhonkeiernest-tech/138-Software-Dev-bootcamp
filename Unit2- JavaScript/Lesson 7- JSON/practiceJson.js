
// Section 1: Create and Display a Simple JSON Object
// TODO: Create a JSON object with properties like name, age, and hobbies
function displaySimpleJSON() {
    // JSON object
    const person = {
      name: "Alice",
      age: 25,
      hobbies: ["reading", "traveling", "coding"]
    };
    const output=document.getElementById('output-simple');
    output.innerHTML=`<p>name: ${person.name}</p>
    <p>age: ${person.age}</p>
    <p>hobbies: ${person.hobbies}</p>
    `;
    
    
    // TODO: Access and display properties of the JSON object
    
  }
  
  // Section 2: Work with a JSON Array
  // TODO: Create an array of JSON objects and display each as a list item
  function displayJSONArray() {
    // JSON Array
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 }
    ];
  
   people.forEach(person=>{
    
   });
  
    // TODO: Loop through the JSON array and display each object as a list item
    
  
   
  }
  
  // Section 3: Practice JSON.stringify and JSON.parse
  // TODO: Convert a JavaScript object to a JSON string and back
  function practiceJSONMethods() {
    const exampleObject = {
      title: "Learning JSON",
      difficulty: "Beginner",
      topics: ["Objects", "Arrays", "Methods"]
    };
  
    // Convert object to JSON string
    const Stringfile=JSON.stringify(exampleObject);
  
    // Convert JSON string back to object
    const jobject=JSON.parse(Stringfile);
  
    // TODO: Display both the stringified and parsed JSON on the webpage
    const output=document.getElementById('output-methods');
    output.innerHTML=`<p>String: ${Stringfile}</p>
    <p>object: ${jobject}</p>
    
    `;
  }
  
  // Call the functions for demonstration

  displaySimpleJSON();
  practiceJSONMethods();