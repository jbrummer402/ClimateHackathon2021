import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from '../components/layout.modules.css';

function CompanyProfile(){
    return (
        <div className="container" >
            <form>
                <p /> What is the name of your business?
                <br/ >
                <input type="text" name="name" />
            </form>
            <form>
                What is your type of business?
            </form>
            <form>
                <p /> What will be the business's admin email?
                <br/ >
                <input type="text" name="name" />
            </form>
            <form>
                <p /> What is/are the name(s) of the business owner(s)?
                <br/ >
                <input type="text" name="name" />
            </form>
            <form>
                <p /> Please provide a phone number for this business.
                <br/ >
                <input type="text" name="name" />
            </form>
        </div>
    )
}

export default CompanyProfile;
