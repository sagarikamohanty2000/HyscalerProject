
const submitBtn = document.getElementById('submit');

const token = localStorage.getItem('token');

submitBtn.onclick = async function(event)  
{
    event.preventDefault();
            alert("The form is submited");
            var role = document.getElementById('frole').value;
            var fname = document.getElementById('fname').value;
            var picture = document.getElementById('fileUpload').value;
            var location = document.getElementById('flocation').value;
            var price = document.getElementById('fprice').value;
            var description = document.getElementById('fdescription').value;

            var obj ={
                role,
                fname,
                picture,
                location,
                price,
                description
            }
            try {         
             const response = await axios.post('http://localhost:3000/property/addProperty', obj,{headers : {'Authorization' : token}});
             console.log(response)
           
            }
             catch(err)  {
                alert("something went wrong");
             console.log(err)};
}
