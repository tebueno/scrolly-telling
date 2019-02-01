import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';

export default class Graphic extends PureComponent {
  state = {
    data: 0,
  };
  
  onStepEnter = ({ element, data, direction }) => this.setState({ data });
  
  render() {
    const { data } = this.state;
    
    return (
      <div>
        <p>data: {data}</p>
        <div className='graph'>Graph {data}</div>
        <Scrollama onStepEnter={this.onStepEnter}>
          <Step data={1}>
            <div className= 'step'>step 1</div>
          </Step>
          <Step data={2}>
          <div className='step'>step 2</div>
          </Step>
          <Step data={3}>
          <div className='step'>step 3</div>
          </Step>
          <Step data={4}>
          <div className='step'>step 4</div>
          </Step>
          <Step data={5}>
          <div className='step'>step 5</div>
          </Step>
        </Scrollama>
      </div>      
    );
  }
}

