function displayDetails() { 
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const tickets = document.getElementById("tickets").value;
    const optShow = document.getElementById("show");
    const showOutput = document.getElementById("showResult");
    const nameOutput = document.getElementById("nameResult");
    const addressOutput = document.getElementById("addressResult");
    const ticketsOutput = document.getElementById("ticketsResult");
    const methodOutput = document.getElementById("methodResult");
    const allMethods = document.querySelectorAll("input[name='method']");
    const selectedMethod = 
        document.querySelector("input[name='method']:checked");
    
    for (let i = 0; i < allMethods.length; i++) {
        allMethods[i].addEventListener("change", checkPreference);
    }
    
    nameOutput.innerText = "Name: " + name;
    addressOutput.innerText = "Address: " + address;
    ticketsOutput.innerText = "Number of tickets: " + tickets;

    displaySelect();

    function displaySelect() {
    let show = optShow.options[optShow.selectedIndex].innerText;
    showOutput.innerText = "Show: " + show;}
    
    methodOutput.innerText = "Method: " + selectedMethod.value;

    function checkPreference() {
        methodOutput.innerText = "Method: " + selectedMethod.value;
    }
}