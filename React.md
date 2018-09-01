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
    const myAarray = this.state.myAarray;
    const productsWriteOut = myAarray.map((myAarrayItem, index) =>
      <div key={index}>{myAarrayItem}</div>
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
