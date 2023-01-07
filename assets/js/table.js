document.querySelector("#mySearchInput").addEventListener("input", () => {
    var dataTableInput = document.querySelector(".dataTable-input");
    document.querySelector(".dataTable-input").value = "a"
    console.log(dataTableInput);
})