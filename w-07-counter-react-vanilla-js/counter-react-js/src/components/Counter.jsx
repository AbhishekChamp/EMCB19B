const Counter = ({
    id,
    value,
    onIncrement,
    onDecrement,
    onReset,
    onDelete,
}) => {
    return (
        <div className='counter'>
            <button className='decrement-btn' onClick={() => onDecrement(id)}>
                -
            </button>
            <span className='counter-value'>{value}</span>
            <button className='increment-btn' onClick={() => onIncrement(id)}>
                +
            </button>
            <button className='reset-btn' onClick={() => onReset(id)}>
                Reset
            </button>
            <button className='delete-btn' onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
};

export default Counter;
