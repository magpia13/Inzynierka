import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/cs';
import 'react-datepicker/dist/react-datepicker.css';
import validator from 'validator';
import Select from "react-select";

class Input extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
  }
 
  render() {
    const {type,multi,noResultsText,onChange,readonly,multiOptionsValue, readOnly, options, validation, optionValue,placeHolder,withPortal, isInvalid, errorMsg,multiSelectOptions,placeholder,...rest} = this.props;
    let input;

    if (type === "date"){
      input =  <DatePicker readOnly={readonly ? true : false} disabled={readonly ? true : false} className={`${readonly ? 'successInput' : ''}`} withPortal={withPortal ? true : false} selected={this.props.value || moment()}  locale="cs" onChange={onChange} peekNextMonth showMonthDropdown showYearDropdown/>
    }
    else if (type === "dropdown"){
      input =
      <select className={`input-style ${isInvalid ? isInvalid : ''}`} onChange={this.handleChange} {...rest}>
      {options.map((o,i)=><option  key={i} value={o.value}>{o.label}</option>)}
      </select>
    }
    else if (type === "email"){
      input = <input className={`input-style ${isInvalid ? isInvalid : ''} ${readonly ? 'successInput' : ''}`} type={type||'text'} readOnly={readonly ? true : false} onChange={this.handleChange} {...rest}/>
    }

    else if (type === "checkbox"){ 
      input = <input readOnly={readonly ? true : false} checked={this.props.value||false} type={type} onChange={readonly ? {} : e=>onChange(e.target.checked)} {...rest}/>
    }
    else if (type === "radio"){
      input = <input 
      checked={this.props.value===optionValue} 
      type={type} 
      onChange={e=>this.handleOptionChange(e, optionValue)} 
      {...rest}/>
    }
    else if (type === "positiveNumber"){ 
      input = <input className={`input-style ${this.props.isInvalid}`}  type={'text'} onChange={this.handleChangeNumber} {...rest}/>
    }
    else if (type === "select"){ 
      input = <Select
      name="filters"
      placeholder={placeholder}
      options={multiSelectOptions}
      onChange={e=>onChange(e)}
      isSearchable
      classNamePrefix="react-select"
      className={`react-select-container  ${isInvalid ? isInvalid : ''}`}
      value={multiOptionsValue}
      multi={multi}
      noResultsText={noResultsText}
      />

    }
    else{
      input = <input readOnly={(readOnly||readonly) ? true : false} className={`input-style  ${isInvalid ? isInvalid : ''} ${readonly ? 'successInput' : ''}`} type={type||'text'} onChange={this.handleChange} {...rest}/>
    }
    return input;
  }

  handleOptionChange(e, optionValue) {
    const {onChange} = this.props;
    if (e.target.checked) {
      onChange(optionValue);
    }
  };

  handleChange(e){
    const newValue = e.target.value;
    console.log(newValue);
    const {onChange, validation} = this.props;
    if (!validation || validation(newValue)) {
      onChange(newValue);
    }
  }

  handleChangeNumber(e){
    let newValue = e.target.value;
    const {onChange} = this.props;

    if((validator.isInt(newValue)&&newValue>=0)) {
      onChange(Number(newValue));
      return;
    }
    if (newValue==='') {
      onChange(newValue);
    }
  }
}


export default Input;
