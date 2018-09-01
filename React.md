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
