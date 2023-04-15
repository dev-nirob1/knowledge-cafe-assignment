import React from 'react';
import './QuestionAndAnswers.css';
const QuestionAndAnswers = () => {
    return (
        <div className='question-section'>
            <h2>Q&A</h2>
            <div className='grid-container'>
                <div className="grid-item">
                    <h3>Difference between props and state ?</h3>
                    <div className='answers'>
                        <p><span>props :</span> props fullform is properties. props recieve data from parent components. Child components can't change props data. If parent component change data and passes through props the child component will re-render it.</p>

                        <p><span>state :</span> State holds data of a components and it can changes the information or data of a components.</p>
                    </div>
                </div>
                <div className="grid-item">
                <h3>How does useState Works ?</h3>
                    <div className='answers'>
                        <p><span>useState :</span> useState is hook of react. useState() store variable in functional component. It returns an array with two elements.</p>
                       
                    </div>
                </div>
                <div className="grid-item">
                <h3>Purpose of useEffect other than fetch ?</h3>
                    <div className='answers'>
                        <p><span>useEffect :</span> is react hook.It loaded data when a component are scrolled.It update a state after a certain action.It setting event listeners.useEffect is a powerfull hook in react.</p>
                       
                    </div>
                </div>
                <div className="grid-item">
                <h3>How does react work ?</h3>
                    <div className='answers'>
                        <p><span>React :</span> is a popular javascript library for building user interface. react use to build reusable components. React use virtual DOM that is the lightweight version of actual DOM. React jsx (Javascript XML) is use for code that like html but it is javascript. Props are used to pass data .React uses state to manage data. Event handler also used in react. Thats how react works.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAnswers;