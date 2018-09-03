### 1. Run in cmd
>create-react-app my_app

>cd my_app

>npm start

### Code examples...
##### Reverse a string
>split("").reverse().join("")
##### If statement ex
>this.state.name.includes("z") ? "Z are not allowed" : this.state.name
##### Method ex
> handleChange = () => {}
##### Button to trigger the method
> <button onClick={this.handleChange}></button>
##### Button to trigger the method that contains a variable
> <button onClick={this.handleChange}></button>
##### Write out a array
>   render() {
    const newArray = this.state.myAarray;
    const productsWriteOut = newArray.map((newArrayItem, index) =>
      <div key={index}>{newArrayItem}</div>
    );
    return (
      <div>
        {productsWriteOut}
      </div>
    );
  }
##### Push a object in a exsisting array in state
> onChange(event){
    var newArray = this.state.arr.slice();    
    newArray.push("new value");   
    this.setState({arr:newArray})
}
##### Remove item from array
> this.state.products.splice(product, 1);

##### Fetch API
> //skinny version
fetch("https://api.me/get")
    .then(response =>response.json())  //Get JSON, implicit return
    .then(json =>console.log(json))    //Log the JSON
    
//fat version
fetch("https://api.me/get")
    .then(function(response){
        return response.json()
    })
    .then(function(json){ 
        console.log(json)
    });
##### Run on load
> componentDidMount() {
    this.exampleMethod();
}
