import React from 'react';

class BadgeForm extends React.Component {

  //inicializamos state
  state = {};
  
  //metodo handleChange de input al momento de recibir info
  // handleChange = e => {
  //   //funcion de la clase component
  //   this.setState({
  //     //le pasamos un objeto para que reciba
  //     //firstName:e.target.value
  //     [e.target.name]: e.target.value//accedemos a todos los name
  //   });
  // };

  //metodo de button
  handleClick = e => {
    console.log('Button was clicked');
  };

  //metodo de envio formulario
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted :) ');
    console.log(this.state);
  };


  render() {
    return (
      <div>
        <h1>Formulario</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type='text' 
              name='firstName'
              value={this.props.formValues.firstName}//con value controlamos en input
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
             <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type='email' 
              name='email'
              value={this.props.formValues.email}
            />
          </div>

          <div className='form-group'>
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type='text' 
              name='jobTitle'
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className='form-group'>
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type='text' 
              name='twitter'
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;


