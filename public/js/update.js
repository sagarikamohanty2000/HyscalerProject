
const submitBtn = document.getElementById('submit');

const cancelBtn = document.getElementById('cancel');

const listId = localStorage.getItem('Listid');

const token = localStorage.getItem('token');

 
window.onload = (async () => {
    try{
    const response = await axios.get(`http://localhost:3000/property/propertyDetails/${listId}`,{headers : {'Authorization' : token}});
    console.log(response);
             document.getElementById('fname').value = `${response.data.property.name}`;
             document.getElementById('flocation').value = `${response.data.property.location}`;
             document.getElementById('fprice').value = `${response.data.property.price}`;
             document.getElementById('fdescription').value = `${response.data.property.description}`;
    }

    catch(err){
        console.log(err);
    }
    
})

submitBtn.onclick = async function(event)    
{
    event.preventDefault();

            
                  alert("The form is submited");
            var fname = document.getElementById('fname').value;
            var picture = document.getElementById('fileUpload').value;
            var location = document.getElementById('flocation').value;
            var price = document.getElementById('fprice').value;
            var description = document.getElementById('fdescription').value;

            var obj ={
                fname,
                picture,
                location,
                price,
                description
            }
            try{
                     
             const response2 = await axios.put(`http://localhost:3000/property/editProperty/${listId}`,obj,{headers : {'Authorization' : token}});
             console.log(response2)
             window.location.href="../view/property_details.html";
           
            }
             catch(err)  {
                alert("something went wrong");
             console.log(err)};
}

cancelBtn.onclick =  async function(event) {

    event.preventDefault();
    window.location.href="../view/property_details.html";

}
