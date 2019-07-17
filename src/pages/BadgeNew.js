import React from 'react';
//NUESTRA PRIMERA PAGINA EN REACT
import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

//componente llamado BadgeNew
class BadgeNew extends React.Component{
  //inicializamos el state y el form de los values
  state = { form:{
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = e => {
    //Solucion de sobrescritura para cada input
    // const nextForm = this.state.form;
    // nextForm[e.target.name]= e.target.value;
    
    this.setState({
      //Otra segunda solucion
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar/>
        <div className='BadgeNew__hero'>
            <img className='img-fluid' src={header} alt='Logo'/>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge 
              firstName = {this.state.form.firstName} 
              lastName = {this.state.form.lastName} 
              jobTitle = {this.state.form.jobTitle} 
              Twitter = {this.state.form.twitter} 
              email = {this.state.form.email}
              avatar='data:image/jpeg;base64,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'/>
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} 
              formValues={this.state.form} 
            /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//exportamos el componente
export default BadgeNew; 


