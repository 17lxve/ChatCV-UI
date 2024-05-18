import * as Form from "@radix-ui/react-form";
import ViewBox from "./ViewBox";
import { FormEvent, useState } from "react";
import { API } from "../api/url";
import axios from "axios";

function ApplyForm() {
  const [accepted, accept] = useState(false);
  const [CV, setCV] = useState("CV");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    document.getElementById("send-button")!.disabled = true;
    document.getElementById("send-button")!.innerHTML = "En cours...";
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("FORM DATA:", data);
    // console.log("File", data.doci.name)
    axios
      .post(API + "candidate/new", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((e) => console.error(e.message))
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        document.getElementById("send-button")!.disabled = false;
        document.getElementById("send-button")!.innerHTML = "Envoyer";
      });
    e.preventDefault();
  };

  const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCV(event.target.files[0].name);
  };

  return (
    <ViewBox>
      <div>
        <div>
          <h2 className="form-title">Nouvelle Candidature</h2>
          <Form.Root
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              submit(e);
              e.preventDefault();
            }}
          >
            {/* Nom de famille */}

            <Form.Field name="ln">
              {/* Block Info */}
              <div>
                {/* Block Name */}
                <Form.Label htmlFor="lni" className="form-label">
                  Nom
                </Form.Label>

                {/* Missing Value Message */}
                <Form.Message match="valueMissing">
                  {"\t Veuillez entrer votre nom de famille!"}
                </Form.Message>

                {/* Incorrect Value Message */}
                <Form.Message match="typeMismatch">
                  Format incorrect, veuillez reessayer.
                </Form.Message>
              </div>
              {/* Block Controller */}
              <Form.Control asChild>
                <input
                  type="text"
                  className="form-input"
                  autoComplete="off"
                  id="lni"
                  name="lni"
                  placeholder={"👨🏾‍👩🏼‍👧🏽‍👦🏽 Nom de famille"}
                  required
                />
              </Form.Control>
            </Form.Field>

            {/* Prénom */}

            <Form.Field name="fn">
              {/* Block Info */}
              <div>
                {/* Block Name */}
                <Form.Label htmlFor="fni" className="form-label">
                  Prénom
                </Form.Label>

                {/* Missing Value Message */}
                <Form.Message match="valueMissing">
                  {"\t Veuillez entrer votre prénom!"}
                </Form.Message>

                {/* Incorrect Value Message */}
                <Form.Message match="typeMismatch">
                  Format incorrect, veuillez reessayer.
                </Form.Message>
              </div>
              {/* Block Controller */}
              <Form.Control asChild>
                <input
                  type="text"
                  className="form-input"
                  autoComplete="off"
                  id="fni"
                  name="fni"
                  placeholder={"🪪 Prénom"}
                  required
                />
              </Form.Control>
            </Form.Field>

            {/* Numéro de Téléphone */}

            <Form.Field name="phone">
              {/* Block Info */}
              <div>
                {/* Block Name */}
                <Form.Label htmlFor="phonei" className="form-label">
                  Téléphone
                </Form.Label>

                {/* Missing Value Message */}
                <Form.Message match="valueMissing">
                  {"\t Veuillez entrer votre num&ro de téléphone!"}
                </Form.Message>

                {/* Incorrect Value Message */}
                <Form.Message match="typeMismatch">
                  Format incorrect, veuillez reessayer.
                </Form.Message>
              </div>
              {/* Block Controller */}
              <Form.Control asChild>
                <input
                  type="tel"
                  className="form-input"
                  autoComplete="off"
                  id="phonei"
                  name="phonei"
                  placeholder={"📞 Numéro de téléphone"}
                  pattern="[0-9]{10}"
                  required
                />
              </Form.Control>
            </Form.Field>

            {/* Adresse E-mail */}

            <Form.Field name="mail">
              {/* Block Info */}
              <div>
                {/* Block Name */}
                <Form.Label htmlFor="maili" className="form-label">
                  E-mail
                </Form.Label>

                {/* Missing Value Message */}
                <Form.Message match="valueMissing">
                  {"\t Veuillez entrer votre adresse e-mail!"}
                </Form.Message>

                {/* Incorrect Value Message */}
                <Form.Message match="typeMismatch">
                  Format incorrect, veuillez reessayer.
                </Form.Message>
              </div>
              {/* Block Controller */}
              <Form.Control asChild>
                <input
                  type="email"
                  className="form-input"
                  autoComplete="off"
                  id="maili"
                  name="maili"
                  placeholder={"✉️ Adresse e-mail"}
                  required
                />
              </Form.Control>
            </Form.Field>

            {/* Document Submission */}

            <Form.Field name="doc">
              {/* Block Info */}
              <div>
                {/* Block Name */}
                {/* <Form.Label htmlFor="doci" className="form-label">
                  CV
                </Form.Label> */}

                {/* Missing Value Message */}
                <Form.Message match="valueMissing">
                  {"\t Veuillez soumettre votre CV!"}
                </Form.Message>

                {/* Incorrect Value Message */}
                <Form.Message match="typeMismatch">
                  Format incorrect, veuillez reessayer.
                </Form.Message>
              </div>
              {/* Block Controller */}
              <Form.Control onChange={(e) => handleFileChange(e)} asChild>
                <input
                  type="file"
                  className="form-input"
                  autoComplete="off"
                  id="doci"
                  name="doci"
                  placeholder={"📰 CV"}
                  accept=".pdf, .docx"
                  required
                />
              </Form.Control>
              <Form.Label htmlFor="doci">
                <div className="file-label">{CV}</div>
              </Form.Label>
            </Form.Field>

            <Form.Field name="cgu">
              {/* Block Controller */}
              <div className="checkbox-wrapper-25">
                <Form.Control asChild>
                  <input
                    name="acc"
                    id="acc"
                    type="checkbox"
                    checked={accepted}
                    onChange={() => accept(!accepted)}
                  />
                </Form.Control>
              </div>
              <Form.Label htmlFor="acc" className="cgu-section">
                <div className="nike">
                  J’ai lu et accepté les conditions générales d’utilisation de
                  la plateforme GS2E.
                </div>
              </Form.Label>
            </Form.Field>

            <div>
              <button id="send-button" disabled={!accepted}>
                Envoyer
              </button>
            </div>
          </Form.Root>
        </div>
      </div>
    </ViewBox>
  );
}
export default ApplyForm;
