import React from 'react'
import logo from './img/facebook.svg'
import './Login.css'


export default function Login() {
    return (
        <>
            <div className='login'>
                <div className='login_container'>
                    <div className='login_recent_logins'>
                        <img className='login_facebook_logo' src={logo} ></img>
                        <h2 className='login_title'>Facebook допомагає тримати звязок з рідними та близькими</h2>

                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <ul className='footer_menu_top'>
                        <li ><a href='' className='footer_li'>English(US)</a></li>
                        <li ><a href='' className='footer_li'>Українська</a></li>
                        <li ><a href='' className='footer_li'>Magyar</a></li>
                        <li ><a href='' className='footer_li'>العربية</a></li>
                        <li ><a href='' className='footer_li'>Français France</a></li>
                        <li ><a href='' className='footer_li'> Türkçe</a></li>
                        <li ><a href='' className='footer_li'>Tiếng Việt</a></li>
                        <li ><a href='' className='footer_li'>Polski</a></li>
                        <li ><a href='' className='footer_li'>Español</a></li>
                        <li ><a href='' className='footer_li'>Português (Brasil)</a></li>
                    </ul>
                   <hr className='line'></hr>
                   <ul className='footer_menu_bottom'>
                        <li ><a href='' className='footer_li'>Sign Up</a></li>
                        <li ><a href='' className='footer_li'>Log In</a></li>
                        <li ><a href='' className='footer_li'>Messenger</a></li>
                        <li ><a href='' className='footer_li'>Facebook Lite</a></li>
                        <li ><a href='' className='footer_li'>Watch</a></li>
                        <li ><a href='' className='footer_li'>Places</a></li>
                        <li ><a href='' className='footer_li'>Games</a></li>
                        <li ><a href='' className='footer_li'>Marketplace</a></li>
                        <li ><a href='' className='footer_li'>Facebook Pay</a></li>
                        <li ><a href='' className='footer_li'>Oculus</a></li>
                        <li ><a href='' className='footer_li'>Portal</a></li>
                        <li ><a href='' className='footer_li'>Instargram</a></li>
                        <li ><a href='' className='footer_li'>Bulletin</a></li>
                        <li ><a href='' className='footer_li'>local</a></li>
                        <li ><a href='' className='footer_li'>Fundraisers</a></li>
                        <li ><a href='' className='footer_li'>Services</a></li>
                        <li ><a href='' className='footer_li'>Voting Information Center</a></li>
                        <li ><a href='' className='footer_li'>Groups</a></li>
                        <li ><a href='' className='footer_li'>About</a></li>
                        <li ><a href='' className='footer_li'>Create Ad</a></li>
                        <li ><a href='' className='footer_li'>Create Page</a></li>
                        <li ><a href='' className='footer_li'>Developers</a></li>
                        <li ><a href='' className='footer_li'>Careers</a></li>
                        <li ><a href='' className='footer_li'>Privacy</a></li>
                        <li ><a href='' className='footer_li'>Cookies</a></li>
                        <li ><a href='' className='footer_li'>Ad choices</a></li>
                        <li ><a href='' className='footer_li'>Terms</a></li>
                        <li ><a href='' className='footer_li'>Help</a></li>
                        <li ><a href='' className='footer_li'>Contact Uploading & Non-Users</a></li>
    

                    </ul>
                </div>
            </footer>
        </>
    )
}
