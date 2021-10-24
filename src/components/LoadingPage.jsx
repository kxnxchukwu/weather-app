import React from 'react';
import LoadingIcon from '../loading.svg'


function LoadingPage() {
  return (<div className="divLoader">
  <img className="svgLoader" src={LoadingIcon} alt="Loading Icon" />
</div>);
}

export default LoadingPage;

