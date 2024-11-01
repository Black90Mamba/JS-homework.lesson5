const jmeno = prompt("Zadejte jmeno").trim()
const prijmeni = prompt("Zadejte prijmeni").trim()

const castJmena = jmeno.slice(0, 3).toLowerCase()
const castPrijmeni = prijmeni.slice(0, 5).toLowerCase()
const email = castPrijmeni + castJmena + '@fit.cvut.cz'

const atIndex = email.indexOf('@')
const parsedEmail = {
  
  domain: email.slice(atIndex + 1),
}

document.body.innerHTML =
  '<p>Email: ' + jmeno + '@' + parsedEmail.domain + '</p>';





