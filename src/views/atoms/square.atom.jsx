const Square = ({value, onSquareClick}) => {
    return <button className="square"
                   style={{width: 50, height: 50}}
                   onClick={onSquareClick}>
        {value}
    </button>;
}

export default Square;
