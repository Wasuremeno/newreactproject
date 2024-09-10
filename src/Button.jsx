function Button(){
    const handleClick = (e) => e.target.textContent = "damn boy"; 

    return(<button onDouble   Click={(e) => handleClick(e)}>click fucker</button>);

}
export default Button