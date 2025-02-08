<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Object Example</title>
</head>
<body>
    <h1>JavaScript Object Example</h1>
    <p>See the output below:</p>

    <div id="output"></div>

    <script>
        // 1. Object Definitions
        let person = {
          firstName: "John",
          lastName: "Doe",
          age: 30,
          
          // 2. Object Methods
          displayInfo: function() {
            return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
          },
          
          // 3. Object Get / Set
          get fullName() {
            return this.firstName + " " + this.lastName;
          },
          
          set fullName(name) {
            const nameParts = name.split(" ");
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
          }
        };

        // 4. Object Prototypes
        function Car(brand, model, year) {
          this.brand = brand;
          this.model = model;
          this.year = year;
        }

        Car.prototype.carInfo = function() {
          return `${this.year} ${this.brand} ${this.model}`;
        };

        let myCar = new Car("Toyota", "Corolla", 2020);

        // 5. Object Protection
        Object.freeze(person);  // Prevent any changes to the `person` object

        let admin = {
          name: "Sara",
          role: "admin"
        };

        Object.seal(admin); // Prevent adding new properties to `admin`, but allow modifications

        // Collect output in a string
        let output = "";

        // Trying to change the `person` object (will not work due to freeze)
        person.age = 35;  // This will not change `age`
        output += "Person's Age after freeze: " + person.age + "<br>"; // Output: 30

        // Trying to add a property to the `admin` object (will not work due to seal)
        admin.permissions = "full";  // This will not be added to `admin`
        output += "Admin permissions: " + admin.permissions + "<br>"; // Output: undefined

        // Modifying `admin` properties (will work since the object is sealed)
        admin.name = "Clara";
        output += "Admin name after modification: " + admin.name + "<br>";  // Output: Clara

        // Output the results
        output += person.displayInfo() + "<br>";  // Output: John Doe is 30 years old.
        output += "Full Name: " + person.fullName + "<br>";  // Output: John Doe
        person.fullName = "Alice Johnson";  // Using setter to update name
        output += "First Name after setter: " + person.firstName + "<br>";  // Output: Alice
        output += "Last Name after setter: " + person.lastName + "<br>";   // Output: Johnson

        output += myCar.carInfo() + "<br>";  // Output: 2020 Toyota Corolla

        // Display output on the web page
        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>
