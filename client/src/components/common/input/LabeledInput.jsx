import React, { Component,Fragment  } from 'react';
import Input from './Input';


class LabeledInput extends Component {

  render() {

    let input;
    const {name, rawValue, beforeRawValue, outer,inner,errorMsg,afterRawValue,labelClass,  ...rest} = this.props;
    if (this.props.outer){
      input =    <span className={outer}>
      <Input {...rest} /> 
      {this.props.inner}
      </span>
    }
    else{
      input =   <Input {...rest} /> 
    }
   
    return (
      <Fragment>
        <label onClick={e => this.props.type === 'date' ?  e.preventDefault(e) : {}} 
        className={`label-style ${labelClass!==undefined ? labelClass : ''}`}>
          {beforeRawValue}
        <span>{name}</span>
          {input}
          {rawValue}
        </label>
        {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
        {afterRawValue}
      </Fragment>
      );
  }
}
 
export default LabeledInput;


