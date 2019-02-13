import React, { Component } from 'react';

class About extends Component {
    constructor(props){
      super(props);
      this.state = {
        nameIndex: 0
      }
    }
    componentDidMount(){
        this.changeIndex();
    }
    changeIndex = () => {
        let index = 0;
      setInterval(() => {
        index < 1 ? index += 1 : index = 0;
        this.setState({
          nameIndex: index
        })
      }, 4000)
    }
    render(){
        const nameIndex = this.state;
        console.log(nameIndex)
        return (
            <div className="About">
                <div className="container">
                    <div className="About-inner">
                        <div className="a-left">
                            <div className="about-card">
                                <h4>About Us</h4>
                                <p>
                                    {/* I've paid $5000 for MBA in a country where the GDP/person is less than $5. 
                                    But I am always passionate for creating solutions that can have a huge impact. */}
                                    We are an agency evolving in the digital. We work with our customers as partners to help them achieve their goals and improve their visibility and brand awareness on the Internet.
                                </p>
                                <div 
                                    className="read-more"
                                    onClick={ () => this.props.showOverlay("about") }
                                >
                                    <span>Read more</span> <i className="fas fa-angle-double-right" />
                                </div>
                            </div>
                        </div>
                        <div className="a-right">
                            <h2>SYFRES</h2>
                            <div className="brand-name">
                                <div className="sy">
                                    <span>SY</span>
                                </div>
                                <div className="name">
                                    <span className={this.state.nameIndex === 0 ? "show" : "hide"}>FRERES</span>
                                    <span className={this.state.nameIndex !== 0 ? "show" : "hide"}>BROTHERS</span>
                                </div>
                                <div className="">
                                    <span className="amp"> & </span>
                                </div>
                                <div className="name">
                                    <span className={this.state.nameIndex === 0 ? "show" : "hide"}>SOEURS</span>
                                    <span className={this.state.nameIndex !== 0 ? "show" : "hide"}>SISTERS</span>
                                </div>
                            </div>
                            {/* <h3>Solutions Numérique, Web & Mobile</h3> */}
                            <h3>Digital, Web & Mobile Solutions</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default About;
