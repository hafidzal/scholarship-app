import React, { Component } from 'react'
import Card from './common/card'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import seniorIcon from '../images/icon-senior.png'
import freshmanIcon from '../images/icon-freshmen.png'


class ScolarshipProgram extends  Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          contents: null,
          isLoading: false,
        };
      }

    async componentDidMount() {
        this.setState({
            isLoading: true
        })

        await this.props.onFetchData()
      }

    render(){
        const {contents, error, pending, isLoading} = this.props;


        return(
            <div className="scolarship-wrapper" id="program">
                <h2>Undergraduate Scholarship Program</h2>
               <div className="subtitle">{isLoading === false? contents.program_content : 'loading...'}</div>
                <div className="row-flex">
                    <div className="row">
                        <div className="first-column">
                            <Card content={isLoading === false? contents.freshman_program : 'loading...'}
                                    avatar={freshmanIcon}
                                    title='Sea Freshman Sholarship Program'/>
                        </div>
                        <div className="second-column" >
                            <Card content={isLoading === false? contents.senior_program : 'loading...'}
                                    avatar={seniorIcon}
                                    title='Sea Senior Sholarship Program'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}



const mapStatetoProps = (state) => {
    return { contents: state.contents, error: state.error, isLoading: state.isLoading }
  }
  
  const mapDispatchprops = (dispatch) => {
    return { onFetchData: () => dispatch(fetchData()) }
  }
  
  
  export default connect(mapStatetoProps, mapDispatchprops)(ScolarshipProgram);