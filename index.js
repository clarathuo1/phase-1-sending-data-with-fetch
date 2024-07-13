function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const userId = object.id;
        const paragraph = document.createElement("p");
        paragraph.textContent = `User ID: ${userId}`;
        document.body.appendChild(paragraph);
      })
      .catch(function (error) {
        const paragraph = document.createElement("p");
        paragraph.textContent = `Error: ${error.message}`;
        document.body.appendChild(paragraph);
      });
  }
