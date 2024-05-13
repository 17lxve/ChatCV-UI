function CandidateRow({
  candidate,
}: {
  candidate: { fn: string; ln: string };
}) {
  return (
    <div className="candidate-row">
      <p className="text-left">
        {candidate.fn} {candidate.ln.toUpperCase()}
      </p>
      <button>CV</button>
    </div>
  );
}

export default CandidateRow;
