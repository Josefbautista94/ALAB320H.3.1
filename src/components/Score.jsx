function Score({ score }) { // { score } is destructured props, which means instead of writing props.score, we can use score directly, The score object contains:{ date: "2018-02-08",   score: 77 }
  
    
  return (
    <p> {/*rendering one paragraph (<p>) that displays: Bolded Date: label, followed by the actual date from the score object and Bolded Score: label, followed by the actual score value */}
      <strong>Date:</strong> {score.date}, <strong>Score:</strong> {score.score}
    </p>
  );
}

export default Score;
