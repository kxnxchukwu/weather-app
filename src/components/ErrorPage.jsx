import React from 'react';

function ErrorPage(props) {
    return (
    <section className="centered">
  <h1>Oops Something Went Wrong</h1>
  <div className="container">
    <p className="message" >{props.message}</p>
  </div>
</section>
    );
}

export default ErrorPage;