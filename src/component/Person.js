import React from "react";

class Person extends React.Component {
state = {
    FullName:"Beya Nasr",
        Bio:"I am a web development student at GoMyCode ",
        Profession:"Student",
        Image:"https://susanaclavero.files.wordpress.com/2015/09/myavatar.jpg"
};

  // componentDidMount
componentDidMount() {
    console.log("Counter Component did mount");
}

  // componentWillUnmount
componentWillUnmount() {
    console.log("Counter Component wil unmount");
}

  // componentDidUpdate
componentDidUpdate(prevprops, prevstate) {
    console.log("Counter Component did update");
    console.log(prevprops, prevstate);
}

render() {
    console.log("render");
    return (
    <div className="Bio">
        <img src={this.state.Image}></img>
        <h1>FullName:{this.state.FullName}</h1>
        <h2>Bio:{this.state.Bio}</h2>
        <h2>Profession:{this.state.Profession}</h2>
    </div>
    );
}
}
export default Person;