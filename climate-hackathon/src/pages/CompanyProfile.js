import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../components/layout.modules.css';

function CompanyProfile(){
    return (
        <div className="container" >
            <form>
                <p /> What is the name of your business?
                <br/ >
                <input type="text" name="businessName" />
            </form>
            <form>
                <label>What is your type of business?
                <br />
                <select>
                    <option value="restaurant">Restaurant</option>
                    <option value="other">Other</option>
                    <option value="other2">Other</option>
                </select>
                </label>
            </form>
            <form>
                <p /> What will be the business's admin email?
                <br/ >
                <input type="text" name="adminEmail" />
            </form>
            <form>
                <p /> What is/are the name(s) of the business owner(s)?
                <br/ >
                <input type="text" name="ownerName" />
            </form>
            <form>
                <p /> Please provide a phone number for this business.
                <br/ >
                <input type="text" name="phoneNumber" />
            </form>
        </div>
    )
}

export default CompanyProfile;
