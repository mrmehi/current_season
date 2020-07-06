import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
    const [lat,setLat] = useState(null)
    const [errorMessage,seterrorMessage] = useState("")


    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            pos => setLat(pos.coords.latitude),
            err => seterrorMessage(err.message)
        )

    },[])

    let content 

    if(errorMessage){
        content = <div>Error:{errorMessage}</div>
    }else if(lat){
        content = <SeasonDisplay lat = {lat}/>
    }else{
        content = <Spinner message = "Zəhmət olmassa lokasiyanızı müəyyən etməyimizə icazə verəsiniz"/>
    }


    return <div className="border red">{content}</div>

}



// class App extends React.Component{
//     constructor(props){
//         super()

//         this.state = {
//             lat: "",
//             errorMessage:"",
           
//         }
       
//     }
//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             pos => this.setState({lat:pos.coords.latitude}),
//             err => this.setState({errorMessage:err.message})
//         )
//     }
    
//     render(){

//         if(this.state.lat && !this.state.errorMessage){
//             return <SeasonDisplay lat = {this.state.lat}/>
//         }
//         else if(this.state.errorMessage && !this.state.lat){
//             return <div>{this.state.errorMessage}</div>
//         }

//         return <Spinner message = "Zəhmət olmassa lokasiyanızı müəyyən etməyimizə icazə verəsiniz"/>
//     }
// }






ReactDOM.render(<App/>,document.querySelector('#root'))