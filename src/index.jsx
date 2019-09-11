import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './index.css'

const WrapperLogin = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    background-color:#80C3AB;
    height: 100vh;

`;

const WrapperRegister= styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    background-color:#80C3AB;
    height: 100vh;

`;
const Button = styled.button`
    background:blue;
    color: white;
    font-weight: bold;
    border:none;
    margin-top:10px;
    margin-bottom:10px;
    width: 90%;
    margin-top:10px;
    padding: 15px 10px;
    border-radius: 4px;
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 100%;
    & .input {
        width: 80%;
        padding: 8px;
        border: none;
        margin-bottom:24px;
        &:first-child {
            margin-top: 24px;
            /* background-color: red; */
        } 
    }
    &:hover {
        ${Button} {
            background-color: yellow;
        }
    }
`;

const Link = styled.div `
    color:#EC630C;
    margin-top:10px; 
    ` ;

class Login extends React.Component{
    state = {
                email : '',
                password: '' ,
            }
      
    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]: value});
     }
    handleSubmit = (e)=>{
        this.props.signIn();
        console.log(this.state);
         e.preventDefault();
     }
    render(){
         const {handleChange , handleSubmit} = this;
         const {email,password} = this.state;
        return(
                <WrapperLogin className='login'>
                    <Form onSubmit = {handleSubmit}>
                    <input  
                        className="input"
                        type= 'email'
                        name = 'email' 
                        placeholder = 'Correo Electronico' 
                        value = {email} 
                        onChange = {handleChange} >
                    </input>    
                    <input 
                        className = "input"
                        type= 'password' 
                        name = 'password'
                        placeholder = 'Contrasena' 
                        value = {password} 
                        onChange = {handleChange} >
                    </input>
                    <Button type='submit' value = 'Iniciar Sesion' > Iniciar Sesion</Button>
                </Form>
                <Link type='submit' className="link" onClick ={()=> {this.props.onChange()}} >Registrarse</Link>     
                </WrapperLogin >
               

                
        );
     }
}
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email: '' ,
            sex : 'Sexo',
            birthdate : '',
            password: '',
            repassword: '',
        }
    }

      
    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]: value});
     }
     handleSubmit = (e)=>{
        this.props.signIn();
        console.log(this.state);
         e.preventDefault();
     }
     render(){
         const {handleChange,handleSubmit} = this;
         const {name,email,sex,date,password,repassword} = this.state;
        return(
                <WrapperRegister className='register'>
                    <Form onSubmit = {handleSubmit}>
                    <input  type= 'text'
                            className="input"
                            name ='name' 
                            placeholder = 'Nombre de Usuario' 
                            value = {name} 
                            onChange = {handleChange} >
                    </input>
                    <input  type= 'email'
                            name = 'email' 
                            className="input"
                            placeholder = 'Correo Electronico' 
                            value = {email} 
                            onChange = {handleChange} >
                    </input>
                    <select  className="input" value ={sex} name='sex' onChange= {handleChange} >
                        <option value = "masculino">
                            Maculino
                        </option>
                        <option value="femenino">
                            Femenino
                        </option>
                    </select> 
                    <input  type= 'date' 
                            name = 'date'
                            className="input"
                            placeholder = 'Fecha de Nacimiento' 
                            value = {date} 
                            onChange = {handleChange} >
                    </input>      
                    <input 
                        type= 'password'
                        name = 'password' 
                        className="input"
                        placeholder = 'Contrasena' 
                        value = {password} 
                        onChange = {handleChange} >
                    </input>
                    <input 
                        type= 'password'
                        name = 'repassword'
                        className="input"  
                        placeholder = 'Confirmar Contrasena' 
                        value = {repassword} 
                        onChange = {handleChange} >
                    </input>
                    <Button type='submit'>Registrar</Button>
                </Form>
                <Link type='submit' onClick ={()=> {this.props.onChange()}}>Ya Tengo una cuenta</Link>     
                </WrapperRegister>     
        );
     }
}
class Home extends React.Component{
    state = {
                isLoggedIn: false,
            }

    changeIsLoggedIn = ()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn});
    }
    render(){
        const {changeIsLoggedIn} = this;
        const {isLoggedIn} = this.state; 
        return(
            <div className="home">
             {!isLoggedIn? 
               (<Auth onChange = {changeIsLoggedIn}/>):
               (<button onClick={changeIsLoggedIn}>
                Salir
                </button>)
               }
            
            </div>
        );
    }
}

class Auth extends React.Component{
    state = {
            isRegistered: true,
            }
    changeIsRegistered = ()=>{
        this.setState({isRegistered:!this.state.isRegistered});
    }
    render(){
        const isRegistered = this.state.isRegistered; 
        const {changeIsRegistered} = this;
        const {onChange} = this.props;
        return(
            <div clasName= 'auth'>
               {isRegistered? 
               (<Login onChange ={changeIsRegistered} signIn ={()=>{onChange()}}/>):
               (<Register onChange ={changeIsRegistered} signIn ={()=>{onChange()}}/>)
               }
            </div>
        );
    }
}
ReactDOM.render(
        <Home/>,
        document.getElementById('root')
    );