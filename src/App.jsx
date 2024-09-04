import List from './List.jsx'
function App() {

    const fruits = [{id: 1, name:"apple", calories: 95},
                    {id: 2, name:"orange", calories: 45},
                    {id: 3, name:"banana", calories: 105},
                    {id: 4, name:"coconut", calories: 159},
                    {id: 5, name:"pineapple", calories: 37}];



    const vegatables = [{id: 6, name:"potatos", calories: 110},
                    {id: 7, name:"celery", calories: 15},
                    {id: 8, name:"carrots", calories: 105},
                    {id: 9, name:"coconut", calories: 159},
                    {id: 10, name:"pineapple", calories: 37}];

    return(<List items={fruits} catagory="Fruits"/>);

}

export default App