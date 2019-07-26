fetch("https://raw.githubusercontent.com/gratien2/skills-test/master/integrator/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // Insert js code here
    });
