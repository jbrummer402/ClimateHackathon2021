import Head from 'next/head';
import Link from 'next/link';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function CompanyProfile(){
    return (
        <>
            <form>
                <label /> What is the name of your business?
                <input type="text" name="name" />
            </form>
            <Dropdown>

            </Dropdown>
            <form>
                <label /> What will be the business's admin email?
                <input type="text" name="name" />
            </form>
            <form>
                <label /> What is/are the name(s) of the business owner(s)?
                <input type="text" name="name" />
            </form>
            <form>
                <label /> Please provide a phone number for this business.
                <input type="text" name="name" />
            </form>
        </>
    )

}

export default CompanyProfile;
