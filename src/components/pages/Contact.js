import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <h1>Contact</h1>
      <form>
        <div className="mb-2">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" />
          <label for="exampleFormControlInput1" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label" >Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}