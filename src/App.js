import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Overlay from './utils/Overlay';
import Contact from './utils/Contact';
import ShowcaseProject from './utils/ShowcaseProject';
import AboutModal from './utils/AboutModal';

// import Header

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showcaseModal: {
        id: null,
        type: "",
        imgIndex: 0
      },
      overlay: false,
      modal: {
        contactMe: false,
        about: false,
        showcase: false
      },
      formData: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
    // this.mouseEnter = this.mouseEnter.bind(this);
  }
  componentDidMount(){
  }
  selectProject = ( id, type ) => {
    this.setState({
        showcaseModal: { id, type, imgIndex: 0 },
        overlay: true
    })
    this.showOverlay("showcase");
  }
  showOverlay = (open = null) => {
    this.setState({
      overlay:  !this.state.overlay
    }, () => {
      let modal = this.state.overlay ? 
                    { [open]: true } 
                  : 
                    {}
      this.setState({ modal })
    });
  }
  switchType = type => {
    this.setState({
      showcaseModal: {
          ...this.state.showcaseModal,
          type
        }
    })
  }
  incDec = (type, imgArrLength) => {
    let { imgIndex } = this.state.showcaseModal;
    let i = type === "inc" && imgIndex < imgArrLength ? imgIndex + 1 : 
            type === "dec" && imgIndex > 0 ? imgIndex - 1 : 
            imgIndex + 0;
    this.setState({
      showcaseModal: {
          ...this.state.showcaseModal,
          imgIndex: Number(i)
        }
    })
  }
  inputChange = e => {
    this.setState({
        formData: {
          ...this.state.formData,
          [e.target.name]: e.target.value
        }
    })
  }
  render() {
    // console.log(this.state.showcaseModal)
    return (
      <div className="App">
        { this.state.overlay && 
          <Overlay 
            showOverlay={ this.showOverlay } 
          />
        }
        { this.state.modal.contactMe && 
          <Contact 
            showOverlay={ this.showOverlay } 
            inputChange={ this.inputChange } 
            formData = { this.state.formData}
          />
        }
        { this.state.modal.about && 
          <AboutModal />
        }
        { this.state.modal.showcase && 
          <ShowcaseProject
            id = { this.state.showcaseModal.id } 
            type = { this.state.showcaseModal.type }  
            imgIndex = { this.state.showcaseModal.imgIndex }  
            switchType = { this.switchType }
            incDec = { this.incDec }
            formData = { this.state.formData}
          />
        }
        <Header 
          showOverlay={ this.showOverlay }
        />
        <Hero 
          showOverlay={ this.showOverlay }
        />
        <About 
          showOverlay={ this.showOverlay }
        />
        <Services />
        <Showcase 
          project = { this.state.showcaseModal } 
          selectProject = { this.selectProject }
          showOverlay={ this.showOverlay }
        />
        <Footer 
          showOverlay={ this.showOverlay }
        />
      </div>
    );
  }
}

export default App;
