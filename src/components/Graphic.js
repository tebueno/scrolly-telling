import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';

export default class Graphic extends PureComponent {
  state = {
    data: 0,
    classMod: '',
  };
  
  onStepEnter = ({ element, data, direction }) =>  {
      
      this.setState({ 
          data: data,
          classMod: (data === 1) ? '' : ' fixed', 
        });
  }
  
  render() {
    const { data, classMod } = this.state;
    
    return (
      <div>
        <div className='intro'><h1>Welcome to my Awesome Scrolly thing</h1></div>
        <Scrollama offset={.33} onStepEnter={this.onStepEnter}>
          <Step>
          <div className={`graph${classMod}`}>Graph {data}</div>
          </Step>
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

