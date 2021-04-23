import { Fragment } from 'react';

const Progress = () => {
  return (
    <Fragment>
      <div className='steps'>
        <div className='step'>
          <div>1</div>
          <div>Step 1</div>
        </div>
        <div className='step'>
          <div>2</div>
          <div>Step 2</div>
        </div>
        <div className='step'>
          <div>3</div>
          <div>Step 3</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
