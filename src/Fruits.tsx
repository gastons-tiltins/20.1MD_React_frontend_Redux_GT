const Fruits = () => {
    const arr = [
        {value: '', text: '--Choose an option--'},
        {value: 'apple', text: 'Apple 🍏'},
        {value: 'banana', text: 'Banana 🍌'},
        {value: 'kiwi', text: 'Kiwi 🥝'},
    ];

    const handleChange = (event: any) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <form action=''>
                <select onChange={handleChange} name='fruits' id='fruit-select'>
                    {arr.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Fruits;
