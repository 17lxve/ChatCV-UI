import { API } from "../api/url";

function CandidateRow({
  candidate,
}: {
  candidate: { prenom: string; nom: string; cv: string };
}) {
  return (
    <div className="candidate-row">
      <p className="text-left">
        {candidate.prenom} {candidate.nom.toUpperCase()}
      </p>
      <button onClick={() => window.open(API + "candidate/cv/" + candidate.cv)}>
        CV
      </button>
    </div>
  );
}

export default CandidateRow;
