import { CandidateRow } from "./index";
import ViewBox from "./ViewBox";

function CandidateListComponent() {
  const candidates = [
    { ln: "KOUADIO-BHEGNIN", fn: "Timmy" },
    { ln: "Teki", fn: "Pascaline" },
    { ln: "Gnepo", fn: "Alain" },
    { ln: "Lognon", fn: "Jonathan" },
    { ln: "Yesso", fn: "Chris" },
    { ln: "Escobar", fn: "Pablo" },
    { ln: "Jobs", fn: "Steve" },
    { ln: "Post", fn: "Austin Richard" },
  ];
  return (
    <ViewBox>
      <div>
        <h1 className="form-title">Liste des candidats</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Rechercher par nom🔎"
          className="form-input"
        />
      </div>
      <div>
        {Array.from(candidates).map((candidate) => (
          <CandidateRow candidate={candidate} />
        ))}
      </div>
      <div className="paginate">1/3</div>
    </ViewBox>
  );
}
export default CandidateListComponent;
