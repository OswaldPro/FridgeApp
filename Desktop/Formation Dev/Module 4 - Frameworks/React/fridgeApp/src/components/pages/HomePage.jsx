import PrimaryBtn from "../buttons/primaryBtn";

export default function Home() {
  return (
    <div className="home-page-container">
      <h1>Empty Fridge</h1>
      <img
        src="/images/fridge.png"
        alt="Cartoon smiling fridge opened let see a few aliments inside it "
      />
      <p>
        The app that helps you <span className="bold-jura">eat better</span> by
        using your <span className="bold-jura">leftovers</span> and{" "}
        <span className="bold-jura">saving</span> as much as possible!
      </p>
      <PrimaryBtn to="/Search">What's in your fridge?</PrimaryBtn>
    </div>
  );
}
