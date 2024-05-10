import { CandidateListComponent, MainBox, ViewBox } from "../components";

function CandidateListPage(){
    return (
        <MainBox>
            <ViewBox>
                <CandidateListComponent />
            </ViewBox>
        </MainBox>
    )
}

export default CandidateListPage;