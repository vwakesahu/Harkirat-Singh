fetch("http://localhost:3000/dontknow?n2=5&n1=1", {
  method: "GET",
}).then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
