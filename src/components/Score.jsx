function Score({ score }) {
  return (
    <p>
      <strong>Date:</strong> {score.date}, <strong>Score:</strong> {score.score}
    </p>
  );
}

export default Score;
