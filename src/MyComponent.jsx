import React, {useState} from 'react'

function MyComponent(){
   
   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carMake, setCarMake] = useState("");
   const [carModel, setCarModel] = useState("");

   function handleAddCar(){

   }

   function handleRemoveCar(index){

   }
   
   function handleYearCar(index){

   }

   function handleMakeCar(index){

   }

   function handleModelCar(index){

   }


    

   
   return (<div>
      <h2>List of Car Objects</h2>
      <ul>

      </ul>

      <input type="number"  value={carYear} onChange={handleYearCar}/>
   </div>);
}

export default MyComponent;