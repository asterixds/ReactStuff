import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Field, reduxForm} from 'redux-form';

import { connect } from "react-redux";
import { createCampaign } from "../actions";

class CampaignNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
        return (
          <div className={className}>
            <label>{field.label}</label>
            <input className="form-control" type="text" {...field.input} />
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        );
      }
    

    onSubmit(values) {
        this.props.createCampaign(values, () => {
            this.props.history.push("/");
          });
    }

    render() {
        const { handleSubmit } = this.props;
    
        return (
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title For Campaign"
              name="title"
              component={this.renderField}
            />
            <Field
              label="Client"
              name="client"
              component={this.renderField}
            />
            <Field
              label="Brand"
              name="brand"
              component={this.renderField}
            />
            <Field
              label="Category"
              name="category"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
        );
      }
    }

    function validate(values) {
        const errors = {};
        if(!values.title ) {
            errors.title = " Enter a title with atleast 3 characters!";
        }
        if (!values.client) {
            errors.client = "Enter client";
        }
        if (!values.brand) {
            errors.brand = "Enter brand";
        }
        if (!values.category) {
          errors.category = "Enter product category";
      }
        return errors;
    }

    export default reduxForm({
        validate,
        form: "PostsNewForm"
    })(
        connect(null, {createCampaign})
        (CampaignNew)
    );
