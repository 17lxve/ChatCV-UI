import axios from "axios";
import { CandidateRow } from "./index";
import ViewBox from "./ViewBox";
import { API } from "./api/url";
import { useEffect, useState } from "react";

function CandidateListComponent() {
  const [candidates, setList] = useState([]);
  useEffect(() => {
    axios.get(API + "candidate").then((data) => setList(data.data));
  }, []);

  // const candidates = [
  //   { nom: "KOUADIO-BHEGNIN", prenom: "Timmy" },
  //   { nom: "Teki", prenom: "Pascaline" },
  //   { nom: "Gnepo", prenom: "Alain" },
  //   { nom: "Lognon", prenom: "Jonathan" },
  //   { nom: "Yesso", prenom: "Chris" },
  //   { nom: "Escobar", prenom: "Pablo" },
  //   { nom: "Jobs", prenom: "Steve" },
  //   { nom: "Post", prenom: "Austin Richard" },
  // ];
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
