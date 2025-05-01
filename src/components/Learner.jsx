import Score from "./Score"; // importing the Score component

function Learner({ learner }) { // The { learner } in the parentheses is destructuring props, so instead of doing props.learner, we can just say learner, we're expecting a learner object, which includes: name, bio, scores
  return (
    <div> {/* We return a root <div> that will hold all the info for one learner. React requires one parent element per component return. */}
      <h2>{learner.name}</h2> {/*This renders the learner’s name dynamically using JSX curly braces. */}
      <p>{learner.bio}</p> {/*This renders the learner’s bio paragraph*/}
      {learner.scores.map((score, index) => ( // This is a map loop, we’re rendering one <Score /> component for each score in the learner’s scores array.
        <Score key={index} score={score} /> // learner.scores.map(...) loops through all the score objects, key={index} gives each one a unique identifier (React needs this when rendering lists), score={score} passes the score object to the Score component as a prop.


      ))}
    </div>
  );
}

export default Learner;
