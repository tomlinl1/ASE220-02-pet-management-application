let divRow = null;
let currentIndex = 0;
let itemsPerPage = 9;
let original = 18;
let total = 18;
function loadPets() {
  for(let i = currentIndex; i < Math.min(currentIndex + itemsPerPage, data.length); i++) {

      if (i % 3 == 0) {
          divRow = document.createElement("div");
          divRow.classList.add("row");
          document.querySelector("#all-pets").appendChild(divRow);
      }

      let divCol = document.createElement("div");
      divCol.classList.add("col");

      let divCard = document.createElement("div");
      divCard.classList.add("card");
      let image = document.createElement("img");
      image.src = data[i].Image;
      image.classList.add("card-img-top", "custom-img");
      divCard.appendChild(image);
      //divCard.innerHTML = `<img src="${data[i].Image}" class="card-img-top custom-img" alt="image of a main coon cat" >`
      
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let cardTop = document.createElement("div");
      cardTop.classList.add("top-of-card");

      let cardTitle = document.createElement("div");
      let petName = document.createElement("h5");
      petName.classList.add("card-title");
      petName.innerText = data[i].Name;
      let petBreed = document.createElement("h6");
      petBreed.classList.add("card-subtitle", "mb-2", "text-body-secondary");
      petBreed.innerText = data[i].Breed;

      let genderIcon = document.createElement("div");
      genderIcon.style = "display: flex";
      let divSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      if (data[i].Sex == 'Female') {
          
          divSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          divSVG.setAttribute("fill", "currentColor");
          divSVG.setAttribute("class", "icon female bi bi-gender-female");
          divSVG.setAttribute("viewBox", "0 0 16 16");

          path.setAttribute("fill-rule", "evenodd");
          path.setAttribute(
          "d",
          "M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
          );
      }
      else if (data[i].Sex == 'Male') {
          divSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          divSVG.setAttribute("fill", "currentColor");
          divSVG.setAttribute("class", "icon male bi bi-gender-male");
          divSVG.setAttribute("viewBox", "0 0 16 16");

          path.setAttribute("fill-rule", "evenodd");
          path.setAttribute(
          "d",
          "M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          );
      };
      let petAge = document.createElement("span");
      petAge.classList.add("age");
      petAge.innerText = data[i].Age;
      let cardText = document.createElement("ul");
      cardText.classList.add("card-text");
      let info1 = document.createElement("li");
      info1.innerText = "Color: " + data[i].Color;
      let info2 = document.createElement("li");
      if (!data[i].SpayedNeutered) {
        info2.innerText = 'Not fixed';
      } else {
        if (data[i].Sex == 'Male') {
            info2.innerText = 'Neutered';
        } else {
            info2.innerText = 'Spayed';
        };
      }

      
      divSVG.appendChild(path);
      
      genderIcon.appendChild(divSVG);
      genderIcon.appendChild(petAge);
      
      cardText.append(info1);
      cardText.append(info2);

      let cardBtn = document.createElement("a");
      cardBtn.classList.add("btn", "btn-danger", "hidden", "delete-btn");
      cardBtn.innerText = "Delete";
      image.addEventListener("click", function () {
        let modalTitle = document.querySelector('#ModalLabel');
        let modalContent = document.querySelector('#ModalContent');

        let fixedStatus = data[i].SpayedNeutered; // Used to show Yes or No on the modal for the status of SpayedNeutered
        if(fixedStatus == true){                  // instead of using true or false
          fixedStatus = "Yes";
        }else{
          fixedStatus = "No";
        };

        modalTitle.innerText = data[i].Name + " the " + data[i].Type;
        modalContent.innerHTML =
        `
        <img src="${data[i].Image}" class="modal-img" >
        <dl>
          <dt>A Little Bit About Me:</dt>
          <dd> ${data[i].Bio} </dd>
          <dt> Breed: </dt> <dd> ${data[i].Breed} <dd>
          <dt> Sex: </dt> <dd> ${data[i].Sex} </dd>
          <dt> Color: </dt> <dd> ${data[i].Color} </dd>
          <dt> Spayed/Neutered: </dt> <dd> ${fixedStatus} </dd>
          <dt> Age: </dt> <dd> ${data[i].Age} </dd>
          <dt> Animal ID: </dt> <dd> ${data[i].ID} </dd>
          <dt> Microchip Number:</dt> <dd> ${data[i].Microchip} </dd>
          <dt> Status </dt>
          <dd>
            <ul>
              <li> ${data[i].Status[0]} </li>
              <li> ${data[i].Status[1]} </li>
              <li> ${data[i].Status[2]} </li>
              <li> ${data[i].Status[3]} </li>
            </ul>
          </dd>
        </dl>
        `;
        let modal = new bootstrap.Modal(document.querySelector('#Modal'));
        modal.show();
      })

      //adding all the divs into the card itself
      cardTitle.appendChild(petName);
      cardTitle.appendChild(petBreed);
      cardTop.appendChild(cardTitle);
      cardTop.appendChild(genderIcon);
      cardBody.appendChild(cardTop);
      cardBody.appendChild(cardText);
      divCard.appendChild(cardBtn);
      divCard.appendChild(cardBody);
      //adding the card into the rows/columns
      divCol.appendChild(divCard);
      divRow.appendChild(divCol);
      console.log(i+1 + " " +data[i].Microchip);
  };
  currentIndex += itemsPerPage;

  if (currentIndex >= data.length) {
    document.querySelector("#loadMoreBtn").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPets();
  let loadMoreBtn = document.createElement("button");
  loadMoreBtn.id = "loadMoreBtn";
  loadMoreBtn.classList.add("btn", "btn-secondary", "mt-3");
  loadMoreBtn.innerText = "Load More Pets!";
  loadMoreBtn.addEventListener("click", loadPets);

  document.querySelector("#all-pets").appendChild(loadMoreBtn);
  console.log(currentIndex);
});

$(function() {
  $(document).on('click', '.delete-btn', function() {
    $(this).closest('.card').remove();
  });
});

$(function() {
  $(document).on('click', '#create-btn', function() {
        let modal = new bootstrap.Modal(document.querySelector('#CreateModal'));
        modal.show();
      });
  });

  
  $(document).on('click', '.btn-create', function(){

    const formData = {
      Name: document.getElementById("name").value,
      Image: document.getElementById("formFileSm").files[0] ? document.getElementById("formFileSm").files[0].name : null,
      Type: document.querySelector("input[name='animalType']:checked")?.value,
      Breed: document.getElementById("breed").value,
      Sex: document.querySelector("input[name='sex']:checked")?.value,
      Color: document.getElementById("color").value,
      SpayedNeutered: document.querySelector("input[name='spayedNeutered']:checked")?.value === "true",
      Age: document.getElementById("age").value + " " + document.getElementById("yearMonth").value,
      ID: document.getElementById("ID").value,
      Microchip: document.getElementById("microchip").value,
      Status: document.getElementById("status").value,
      Bio: document.getElementById("bio").value,
    };

    data.push(formData);
    console.log(data); // Logs updated data array
    document.getElementById("create").reset();
    total += 1;
    console.log("total:" + total);
    console.log("original:" + original);
    if (total > original) {
      console.log("total was larger than original updating")
      document.querySelector("#loadMoreBtn").style.display = "block";
      original = total;
      console.log("total: " + total);
      console.log("original: " + original);
    }
  });


  