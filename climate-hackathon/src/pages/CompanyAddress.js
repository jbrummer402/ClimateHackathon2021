//import Head from 'next/head';
//import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../components/layout.modules.css';

function CompanyAddress(){
    return (
        <div className="container" >
            <p />Please provide the address of the business
            <form>
                <p /> Line 1:
                <input type="text" name="businessName" />
            </form>
            <form>
                <p /> Line 2:
                <input type="text" name="businessName" />
            </form>
            <form>
                <p /> Country
                <select>
                    <option value="unitedStates">United States</option>
                    <option value="canada">Canda</option>
                    <option value="otherCountry">Other</option>
                </select>
            </form>
            <form>
                <p /> State
                <select>
                </select>
            </form>
            <form>
                <p /> City
                <input type="text" name="city" />
            </form>
            <form>
                <p /> Zip
                <input type="text" name="zip" />
            </form>
        </div>
    )
}

export default CompanyAddress;
