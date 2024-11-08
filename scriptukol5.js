const jmeno = prompt("Zadejte jmeno").trim()
const prijmeni = prompt("Zadejte prijmeni").trim()
const domain = "fit.cvut.cz"
const castJmena = jmeno.slice(0, 3).toLowerCase()
const castPrijmeni = prijmeni.slice(0, 5).toLowerCase()


document.body.innerHTML =
  '<p>Email: ' + castJmena + castPrijmeni + '@' + domain + '</p>';





