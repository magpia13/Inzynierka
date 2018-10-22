import React, { Component } from 'react';
import LabeledInput from 'components/common/input/LabeledInput';
import dotProp from 'dot-prop-immutable';

class Form extends Component {
  constructor(props){
    super(props);
    this.generateInput=this.generateInput.bind(this);
  }

  render(){
    return(
      <form className={this.props.class} onSubmit={e=>e.preventDefault()}>
        {this.props.schema.map(this.generateInput)}
      </form>
    );
  }

  generateInput(s){
    const { onChange, formData } = this.props;  
    const { path ,pk, ...rest} = s;
    if (s.type==='raw') {return s.value;}
    return  <LabeledInput
              {...rest}
              key={path+(s.optionValue||'')}
              value={dotProp.get(formData, path)}
              onChange={v=>onChange(dotProp.set(formData, s.path, v))}
            />
  }
}  

export default Form; 
    