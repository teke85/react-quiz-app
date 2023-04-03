import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <div className="content_container">
        <h1 className="title text-light">React Quiz Application</h1>

        <ol className="questions-wrapper">
          <li>You will be asked 20 questions one after the other.</li>
          <li>10 points is awarded for each correct answer.</li>
          <li>
            Each question has three options. You can choose only one option.
          </li>
          <li>You can review and change answers before the quiz finishes.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <div className="form-container">
          <form id="form">
            <input
              ref={inputRef}
              className="userid"
              type="text"
              placeholder="Username*"
            />
          </form>
          <div className="start">
            <Link className="btn" to={'quiz'}>
              <span className="startBtn">Start Quiz</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
