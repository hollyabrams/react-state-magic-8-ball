import { useState } from 'react';
import './EightBall.css';

// Defining a function that takes an array and returns a random element from it
const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];


function EightBall({ answers }) {
    // Initializing the state variables 'msg' and 'color' using useState
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');
    const [counts, setCounts] = useState({ red: 0, green: 0, goldenrod: 0 });

    // Randomly selects a message and color from the 'answers' array, updates the 'msg' and 'color' state variables, and updates the 'counts' state variable to reflect the new color count
    const updateAnswer = () => {
        const { msg, color } = choice(answers);
        setMsg(msg);
        setColor(color);
        setCounts((prevCounts) => ({ ...prevCounts, [color]: prevCounts[color] + 1 }));
    };

    // Resets the 'msg', 'color', and 'counts' state to their initial values
    const resetEightball = () => {
        setMsg('Think of a Question');
        setColor('black');
        setCounts({ red: 0, green: 0, goldenrod: 0 });
    };

    // Displays the current 'msg' and has a background color of the current 'color'; a button with class 'Reset-btn' that calls the resetEightball function when clicked; and a div with class 'Recordkeeping' that displays the current color counts as three separate <p> elements
    return (
        <>
            <div className='EightBall' onClick={updateAnswer} style={{ backgroundColor: color }}>
                <p>{msg}</p>
            </div>

            <button className='Reset-btn' onClick={resetEightball}>
                Reset Eight Ball
            </button>

            <div className='Recordkeeping'>
                {Object.entries(counts).map(([color, count]) => (
                    <p className={`EightBall-${color}-count`} key={color}>
                        {color}: {count}
                    </p>
                ))}
            </div>
        </>
    );
}

EightBall.defaultProps = {
    answers: [
        { msg: 'It is certain.', color: 'green' },
        { msg: 'It is decidedly so.', color: 'green' },
        { msg: 'Without a doubt.', color: 'green' },
        { msg: 'Yes - definitely.', color: 'green' },
        { msg: 'You may rely on it.', color: 'green' },
        { msg: 'As I see it, yes.', color: 'green' },
        { msg: 'Most likely.', color: 'green' },
        { msg: 'Outlook good.', color: 'green' },
        { msg: 'Yes.', color: 'green' },
        { msg: 'Signs point to yes.', color: 'goldenrod' },
        { msg: 'Reply hazy, try again.', color: 'goldenrod' },
        { msg: 'Ask again later.', color: 'goldenrod' },
        { msg: 'Better not tell you now.', color: 'goldenrod' },
        { msg: 'Cannot predict now.', color: 'goldenrod' },
        { msg: 'Concentrate and ask again.', color: 'goldenrod' },
        { msg: "Don't count on it.", color: 'red' },
        { msg: 'My reply is no.', color: 'red' },
        { msg: 'My sources say no.', color: 'red' },
        { msg: 'Outlook not so good.', color: 'red' },
        { msg: 'Very doubtful.', color: 'red' },
    ],
};

export default EightBall;
