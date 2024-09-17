import React, {useState} from 'react';

function MyComponent(){

   
   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

   function handleAddFood(){
      const newFood = document.getElementById("foodInput");
      document.getElementById("foodInput").value = "";

      setFoods(f =>[...f, newFood]);
   }
   function handleRemoveFood(index){
      setFoods();
   }

   return (<div>
      <h2>List of Food</h2>
      <ul>
         {foods.map((food, index) => 
         <li key={index} onClick={handleRemoveFood}>
            {food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder='Enter food name'/>
      <button onClick={handleAddFood}>Add Food</button>
   </div>);

}

export default MyComponent;




























// import React, {useState} from 'react';
// function MyComponent(){
//    const [count, setCount] = useState(0);

//    function increment(){
//       setCount(c => c +1);
//       setCount(c => c +1);
//       setCount(c => c +1); 
//    };

//    function decrement(){
//       setCount(count => count - 1);
//       setCount(count => count - 1);
//       setCount(count => count - 1);
//    };

//    function reset(){
//       setCount(c => c = 0);
//    };
// };


 









// import React, {useState} from 'react';

// function MyComponent(){

//    const [name, setName] = useState("Guest"); 
//    const [quantity, setQuantity] = useState(1); 
//    const [comment, setComment] = useState("");
//    const [payment, setPayment] = useState("");
//    const [shipping, setShipping] = useState("Delivery");

//    function handleNameChange(event){
//       setName(event.target.value);
//    }
   
//    function handleQuantityChange(event){
//       setQuantity(event.target.value);
//    }

//    function handleCommentChange(event){
//       setComment(event.target.value);
//    }

//    function handlePaymentChange(event){
//       setPayment(event.target.value);
//    }

//    function handleShippingChange(event){
//       setShipping(event.target.value);
//    }

//    return (<div>
//       <input value={name} onChange={handleNameChange}/>
//       <p>Name: {name}</p>

//       <input value={quantity} onChange={handleQuantityChange} type="number" />

//       <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'> 
//          <p>comment: {comment}</p>
//       </textarea>

//       <select value={payment} onChange={handlePaymentChange}>
//          <option value="">Select an option</option>
//          <option value="Visa">Visa</option>
//          <option value="Mastercard">Mastercard</option>
//          <option value="Giftcard">Giftcard</option>
//       </select>
//          <p>Payment: {payment}</p>

//          <label>
//             <input type="radio" value="Pick Up" 
//             checked={shipping === "Pick Up"}
//             onChange={handleShippingChange}/>

//             Pick Up
//          </label>
//          <label>
//             <input type="radio" value="Delivery" 
//             checked={shipping === "Delivery"}
//             onChange={handleShippingChange}/>

//             Delivery
//          </label>
//          <p>Shipping: {shipping}</p>
//    </div>);
// }
// export default MyComponent













// import React, {useState} from 'react';

// function MyComponent(){
//  const [name, setName] = useState();
//  const [age, setAge] = useState(0);
//  const [isEmployed, setIsEmployed] = useState(false);

 
//  const updateName = () => {
//     setName("Dima");
//  }

//  const incrementAge = () => {
//     setAge(age + 1);
//  }

// const toggleEmployedStatus = () => {
//     setIsEmployed(!isEmployed);
// }

//  return( <div>
//     <p>Name: {name}</p>
//     <button onClick={updateName}>Set Name</button>

//     <p>age: {age}</p>
//     <button onClick={incrementAge}>Increment Age</button>
         
//     <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//     <button onClick={toggleEmployedStatus}>Increment Age</button>
//          </div>);

// }

// export default MyComponent