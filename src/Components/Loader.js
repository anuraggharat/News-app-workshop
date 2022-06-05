import React from 'react'

export default function Loader() {
  return (
    <div className="container text-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
