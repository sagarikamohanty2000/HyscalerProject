
const addPropertyBtn = document.getElementById('propertyAdd');

const propertyListBtn = document.getElementById('propertyList');

const token = localStorage.getItem('token');

const pTag = document.getElementById('paraList');


propertyListBtn.onclick = async function(event)    
{
   event.preventDefault();

    const response = await axios.get(`http://localhost:3000/property/PropertyList`, {headers: {"Authorization" : token}});
    console.log(response.data.propertyList);   
    const obj = response.data.propertyList;

    pTag.innerHTML='';
    for(let i = 0 ; i<obj.length; i++)
       {
          var list = document.createElement('a');
          list.className="list-group-item";
          list.id=`${obj[i].id}`;
          list.onclick = (async () => {
            localStorage.setItem('Listid',obj[i].id);
            window.location.href="../view/property_details.html";
          })
          
                      
                     

          //Data ShowCased on the screen
          list.textContent = obj[i].name;

          pTag.appendChild(list);
    }
}

addPropertyBtn.onclick = async function(event){
   event.preventDefault();
   window.location.href="../view/property.html";
}
