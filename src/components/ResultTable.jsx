import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';



const ResultTable = ({ userData }) => {

    let finalInvestmentData = calculateInvestmentResults(userData);
    const initialInvestment =
        finalInvestmentData[0].valueEndOfYear -
        finalInvestmentData[0].interest -
        finalInvestmentData[0].annualInvestment;


    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {finalInvestmentData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment *
                        yearData.year -
                        initialInvestment;

                    const totalAmoutInvested = yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(initialInvestment)}</td>
                            <td>{formatter.format(totalAmoutInvested)}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

export default ResultTable;