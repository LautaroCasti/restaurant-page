export default function contact(parentNode) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact")

  const contactPoster = document.createElement("h1");
  contactPoster.classList.add("contact__poster");
  contactPoster.textContent = "CONTACT US";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact__info");

  const contactNumber = document.createElement("p");
  contactNumber.classList.add("contact__number");
  contact.textContent = "11-2222-3333";

  const contactLocation = document.createElement("div");
  contactLocation.classList.add("contact__location");
  contactLocation.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.8603929157316!2d-86.7838179331737!3d36.156915853419264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466f34fcc53ef%3A0x1d224706488fe73e!2sAdele&#39;s%20Nashville!5e0!3m2!1ses-419!2sar!4v1704036096325!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  contactInfo.appendChild(contactNumber);
  contactInfo.appendChild(contactLocation);

  contactContainer.appendChild(contactPoster);
  contactContainer.appendChild(contactInfo);

  parentNode.appendChild(contactContainer);
}