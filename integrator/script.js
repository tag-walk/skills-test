fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // Insert js code here
    });
