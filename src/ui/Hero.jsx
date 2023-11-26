import Button from "./Button";

function Hero() {
  return (
    <div className="mt-56 text-center">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
        Connect, Share, Thrive
        <br />
        Your Virtual Social Haven Awaits
      </h1>
      <p className="text-xl mb-4">
        Share Your Ideas and Initiate Inspiring Conversations with <br /> New
        Friends 💭🤝
      </p>
      <Button type="primary" to="/register">
        Join Now
      </Button>
    </div>
  );
}

export default Hero;
