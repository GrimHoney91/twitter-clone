import '../main-ss/entry.css';
import logo from '../sub-components/entry/images/twitter-logo.webp';
import logoBg from '../sub-components/entry/images/e-bg.png';
import wLogo from '../sub-components/entry/images/w-twitter-logo.png';
import google from '../sub-components/entry/images/g.png';
import apple from '../sub-components/entry/images/apple.webp';

const Entry = () => {

    return (
        <div className="entry-panel">
            <div className='ep-l'>
                <img className='logo-bg' alt='twitter background logo' src={logoBg} />
                <img className='w-logo' alt='white twitter logo' src={wLogo}/>
            </div>
            <div className='ep-r'>
                <img className='ep-t-logo' alt='twitter-logo' src={logo} />
                <span className='ep-r-s1'>Happening now</span>
                <span className='ep-r-s2'>Join Twitter today.</span>
                <div className='ep-btn-c'>
                    <button>
                        <img alt='google chrome logo' src={google}/>
                        <span>Sign up with Google</span>
                    </button>
                    <button>
                        <img alt='apple logo' src={apple}/>
                        <span>Sign up with Apple</span>
                    </button>
                    <div className='ep-lc'>
                        <span></span>
                        <span>or</span>
                        <span></span>
                    </div>
                    <button>Sign up with phone or email</button>
                    <p>
                        By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use.</a>
                    </p>
                </div>
                <span className='ep-r-s3'>Already have an account?</span>
                <button className='ep-si-btn'>Sign in</button>
            </div>
        </div>
    );
}

export default Entry;