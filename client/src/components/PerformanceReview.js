import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';


function PerformanceReview() {
    const { user, isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

    useEffect(async () => {
        getEmployeePerformance();
    }, []);

    function getEmployeePerformance() {
        console.log(user.email);
        API.getEmployeePerformance(user.email)
          .then(review => {
            setData(review.data);
            console.log(review.data)
          })
          .catch(err => console.log(err));
      }

    return (
        <div>
            {isAuthenticated && (
                <ul className="noBullet">
                    {data.map(review => (
                        <li key={review.id}>
                            <row>
                                <div className="d-flex flex-row bold oswald">
                                    <div><h5 className="sub-title">Year: {review.reviewYear}</h5></div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row bold oswald">
                                    <div><h5 className="sub-title">Quarter: {review.reviewQtr}</h5></div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row bold oswald">
                                    <div><h5 className="sub-title">Status: {review.reviewStatus}</h5></div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row bold oswald">
                                    <div><h5 className="sub-title">Overall Rating: {review.actualOverallRating}</h5></div> 
                                </div>
                            </row>

                            <table className="table-responsive mt-4">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Net Sales</th>
                                        <th>Hours</th>
                                        <th>BB%</th>
                                        <th>THPC</th>
                                        <th>CPFH</th>
                                        <th>SPH</th>
                                        <th>L360</th>
                                        <th>Attendance</th>
                                        <th>Attitude</th>
                                    </tr>
                                </thead>
                                <tbody className="tborder">
                                    <tr>
                                        <td className="bold">GOALS</td> 
                                        <td >${review.goalNetSales}</td> 
                                        <td>{review.goalHours}</td> 
                                        <td>{review.goalBB}%</td> 
                                        <td>${review.goalTHPC}</td> 
                                        <td>{review.goalCPFH}</td> 
                                        <td>${review.goalSPH}</td> 
                                        <td>{review.goalL360}</td> 
                                        <td className="text-center">{review.goalAttendance}</td> 
                                        <td className="text-center">{review.goalAttitude}</td>                                         
                                    </tr>
                                    <tr>
                                        <td className="bold">ACTUALS</td> 
                                        <td>${review.actualNetSales}</td> 
                                        <td>{review.actualHours}</td> 
                                        <td>{review.actualBB}%</td> 
                                        <td>${review.actualTHPC}</td> 
                                        <td>{review.actualCPFH}</td> 
                                        <td>${review.actualSPH}</td> 
                                        <td>{review.actualL360}</td> 
                                        <td className="text-center">{review.actualAttendance}</td> 
                                        <td className="text-center">{review.actualAttitude}</td>                                         
                                    </tr>
                                </tbody>
                            </table>
                            <br></br>
                        </li>
                        
                    ))}
              
                </ul>
            )}
        </div>

    );
}

export default PerformanceReview;