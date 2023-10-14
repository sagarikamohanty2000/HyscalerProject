
const nameTag = document.getElementById('name');

const pictureTag = document.getElementById('picture');

const locationTag = document.getElementById('location');

const priceTag = document.getElementById('price');

const descriptionTag = document.getElementById('description');

const buttonTag = document.getElementById('butons');

const listId = localStorage.getItem('Listid');

const token = localStorage.getItem('token');

const deleteBtn = document.getElementById('delete');
const editBtn = document.getElementById('update');
const addPropertyBtn = document.getElementById('propertyAdd');

window.onload = (async () => {

    const response = await axios.get(`http://localhost:3000/property/propertyDetails/${listId}`,{headers : {'Authorization' : token}});
    console.log(response.data.property);
    showDetails(response.data.property);
})

function showDetails(obj) {
 
    const name = document.createElement('li');
    const picture = document.createElement('li');
    const location = document.createElement('li');
    const price = document.createElement('li');
    const description = document.createElement('li');
    const list = document.createElement('li');


    deleteBtn.onclick = (async () => {

        if(confirm('Do you want to delete ? '))
              {
                 
                 try{
                 const response = await axios.delete(`http://localhost:3000/property/deleteProperty/${obj.id}`, {headers: {"Authorization" : token}});
                 console.log(response);
                 window.location.href="../view/user.html";
                 }
                 catch(error) {
                    console.log(error)
                 }
              }
        })

        editBtn.onclick = (async () => {
            window.location.href="../view/update.html";
        })

        name.textContent = "Property Name : "+obj.name;
        nameTag.appendChild(name);
        picture.textContent = "Pictire : "+obj.picture;
        pictureTag.appendChild(picture);
        location.textContent = "Location : "+obj.location;
        locationTag.appendChild(location);
        price.textContent = "Price : "+obj.price;
        priceTag.appendChild(price);
        description.textContent = "About This Property : "+obj.description;
        descriptionTag.appendChild(description);

        

   

}

addPropertyBtn.onclick = (async () => {
    window.location.href = "../view/property.html";
})