import React, { useState } from 'react';

const UserInputsContainer = ({ ochangeUserData, userInput }) => {

    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label >Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) => ochangeUserData('initialInvestment', parseInt(e.target.value))}
                    />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        required onChange={(e) => ochangeUserData('annualInvestment', parseInt(e.target.value))}
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label >Expected return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(e) => ochangeUserData('expectedReturn', parseInt(e.target.value))}
                    />
                </p>
                <p>
                    <label >Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(e) => ochangeUserData('duration', parseInt(e.target.value))}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInputsContainer;