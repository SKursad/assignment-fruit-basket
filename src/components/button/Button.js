import './Button.css';

function Button ({buttonType, buttonDisabled, children, clickHandler}) {
    return (
            <button
                type={buttonType}
                disabled={buttonDisabled}
                onClick={clickHandler}>
                {children}
            </button>
    );
}

export default Button;