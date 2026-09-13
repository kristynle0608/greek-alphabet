type WelcomeProps = {
  onStart: () => void;
};

function Welcome({ onStart }: WelcomeProps) {

    return (
        <>
            <h1>Do you know your Greek Alphabet? Let's find out!</h1>
            <button onClick={onStart}>Let's Go</button>
        </>
    )
}

export default Welcome;