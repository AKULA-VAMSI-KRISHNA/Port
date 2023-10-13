import React from 'react'
import './Personal.css';

function Personal() {
  return (
    <div className="table">
      <table>
        <tr class="asd">
            <td colSpan={2} >Personal Details</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>AKULA VAMSI KRISHNA</td>
        </tr>
        <tr>
            <td>Father's Name </td>
            <td>AKULA SRINIVASA RAO</td>
        </tr>
        <tr>
            <td>Mother's Name</td>
            <td>AKULA SUNITHA</td>
        </tr>
        <tr>
            <td>Data of Birth</td>
            <td>30th November 2001</td>
        </tr>
        <tr>
            <td>Nationality</td>
            <td>Indian</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Languages Known</td>
            <td>Telugu,English,Hindi</td>
        </tr>
        <tr>
            <td>Interests</td>
            <td>Improve the farming using new technologies,watching cricket</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>Aravapalli, Repalle Mandal, Guntur Dist</td>
        </tr>
      </table>
    </div>
  )
}

export default Personal
