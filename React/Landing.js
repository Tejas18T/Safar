import { useState } from "react";
import { Link } from "react-router-dom";
import Safar_login from './Login'; // Import the login form component
import Safar_SignUp from './Register'; // Import the sign-up form component

function Website() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showLogin, setShowLogin] = useState(false); // To control login modal visibility
    const [showSignUp, setShowSignUp] = useState(false); // To control sign-up modal visibility
    const destinations = [
        { id: 1, name: 'Paris', rating: 4.8, image: 'https://via.placeholder.com/300x200', price: '$1200' },
        { id: 2, name: 'Maldives', rating: 4.9, image: 'https://via.placeholder.com/300x200', price: '$2000' },
        { id: 3, name: 'Tokyo', rating: 4.7, image: 'https://via.placeholder.com/300x200', price: '$1500' },
    ];

    const filteredDestinations = destinations.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLoginClick = () => {
        setShowLogin(true); // Show the login modal
        setShowSignUp(false); // Hide the sign-up modal if it’s open
    };

    const closeLoginModal = () => {
        setShowLogin(false); // Close the login modal
    };

    const handleSignUpClick = () => {
        setShowSignUp(true); // Show the sign-up modal
        setShowLogin(false); // Hide the login modal if it’s open
    };

    const closeSignUpModal = () => {
        setShowSignUp(false); // Close the sign-up modal
    };

    return (
        <div className="website">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#003f5c', padding: '1rem' }}>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <a className="navbar-brand text-white fw-bold" href="#">🌍 Safar</a>

                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <a className="nav-link text-white me-3" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                    </ul>
                    <form className="d-flex align-items-center mx-auto" style={{ maxWidth: '400px', flex: '1' }}>
                        <input
                            className="form-control rounded-pill px-4 py-2"
                            type="search"
                            placeholder="Search destinations"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)' }}
                        />
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <button onClick={handleLoginClick} className="nav-link text-white me-3" style={{ background: 'none', border: 'none' }}>
                                Login
                            </button>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSignUpClick(); }} className="nav-link text-white me-3">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Content for the website */}
            <div className="hero-section text-center text-white" style={{ background: 'linear-gradient(45deg, #ff7e5f, #feb47b)', padding: '4rem 2rem', color: '#fff' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>Discover Your Next Adventure</h1>
                <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}>
                    Find the best destinations and travel deals just for you!
                </h3>
            </div>

            {/* Popular Destinations */}
            <div className="container mt-4">
                <h2 className="text-center mb-4">Popular Destinations</h2>
                <div className="row">
                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map(dest => (
                            <div key={dest.id} className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img src={dest.image} className="card-img-top" alt={dest.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{dest.name}</h5>
                                        <p className="card-text">Rating: <strong>{dest.rating} ⭐</strong></p>
                                        <p className="card-text">Price: <strong>{dest.price}</strong></p>
                                        <button className="btn btn-primary w-100">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No destinations found for "{searchTerm}"</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center text-lg-start mt-4 py-3">
                <div className="container">
                    <p className="mb-0">&copy; 2025 Travel Agency. All rights reserved. |{' '}
                        <a href="#" className="text-warning">Privacy Policy</a>
                    </p>
                </div>
            </footer>

            {/* Modal for Login */}
            {showLogin && (
                <div className="modal d-flex justify-content-center align-items-center fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeLoginModal}>
                    <div className="modal-dialog" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeLoginModal}></button> {/* Added aria-label */}
                            </div>
                            <div className="modal-body">
                                <Safar_login />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Sign Up */}
            {showSignUp && (
                <div className="modal d-flex justify-content-center align-items-center fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeSignUpModal}>
                    <div className="modal-dialog" style={{ maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeSignUpModal}></button> {/* Added aria-label */}
                            </div>
                            <div className="modal-body">
                                <Safar_SignUp />
                                {/* "Back to Login" link */}
                                <div className="text-center mt-3">
                                    <button
                                        onClick={() => {
                                            setShowSignUp(false); // Close the sign-up modal
                                            setShowLogin(true); // Open the login modal
                                        }}
                                        className="btn btn-link"
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Website;
