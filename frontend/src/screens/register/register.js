import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                Already have an account?{' '}
                <Link
                    style={{
                        textDecoration: 'underline',
                        color: 'rgb(102, 168, 81)',
                        fontWeight: '600'
                    }}
                    to="/login"
                >
                    Log in
                </Link>
            </div>
        </div>
    );
};

export default Register;
