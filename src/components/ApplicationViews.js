import { Route } from "react-router-dom";
import React from "react";
import Login from "./login/login"
import CreateUser from "./createUser/createUser"
import PatientHomePage from "./patient/patientHome"
import SessionStep1 from "./session/sessionBeggining/sessionHome"
import PsychologicalEvaluation from "./session/psychologicalEvaluation/psychologicalEvaluation"
import PsychologicalEvaluationFamily from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationFamily"
import PsychologicalEvaluationSiblings from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationSiblings"
import PsychologicalEvaluationChildren from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationChildren"
import PsychologicalEvaluationSpouse from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationSpouse"
import PsychologicalEvaluationConsent from "./session/consent/consent"
import PsychologicalEvaluationReferral from "./session/referral/referral"
import PsychologicalEvaluationAdditionalData from "./session/additionalData/additionalData"
import InterviewPg1 from "./session/interviews/InterviewPg1"
import InterviewPg2 from "./session/interviews/InterviewPg2"
import InterviewPg3 from "./session/interviews/InterviewPg3"
import InterviewPg4 from "./session/interviews/InterviewPg4";
import InterviewPg5 from "./session/interviews/InterviewPg5";
import InterviewPg6 from "./session/interviews/InterviewPg6";
import InterviewPg7 from "./session/interviews/InterviewPg7";
import InterviewPg8 from "./session/interviews/InterviewPg8";
import InterviewPg9 from "./session/interviews/InterviewPg9";
import FamilyPg1 from "./session/family/FamilyPg1";
import FamilyPg2 from "./session/family/FamilyPg2";
import FamilyPg3 from "./session/family/FamilyPg3";
import FamilyPg4 from "./session/family/FamilyPg4";
import FamilyPg5 from "./session/family/FamilyPg5";
import FamilyPg6 from "./session/family/FamilyPg6";
import FamilyPg7 from "./session/family/FamilyPg7";
import FamilyPg8 from "./session/family/FamilyPg8";
import FamilyPg9 from "./session/family/FamilyPg9";
import FamilyPg10 from "./session/family/FamilyPg10";
import FamilyPg11 from "./session/family/FamilyPg11";
import FamilyPg12 from "./session/family/FamilyPg12";
import FamilyPg13 from "./session/family/FamilyPg13";
import FamilyPg14 from "./session/family/FamilyPg14";
import FamilyPg15 from "./session/family/FamilyPg15";
import PsychologicalEvaluationReportSummary from "./session/family/reportSummary/reportSummary";
import HousingPg1 from "./session/housing/HousingPg1";
import HousingPg2 from "./session/housing/HousingPg2";
import HousingPg3 from "./session/housing/HousingPg3";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  // const userId = parseInt(props.userId);

  return (
    <>
      <Route
          exact
          path="/"
          render={(props) => {
            return <Login setUser={setUser} hasUser={hasUser} {...props} />;
          }}
        />
    <React.Fragment>
      <Route
        exact
        path="/createUser"
        render={(props) => {
          return <CreateUser setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/patient"
        render={(props) => {
          return <PatientHomePage setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/sessionStep1"
        render={(props) => {
          return <SessionStep1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation"
        render={(props) => {
          return <PsychologicalEvaluation setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_family"
        render={(props) => {
          return <PsychologicalEvaluationFamily setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_siblings"
        render={(props) => {
          return <PsychologicalEvaluationSiblings setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_children"
        render={(props) => {
          return <PsychologicalEvaluationChildren setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_spouse"
        render={(props) => {
          return <PsychologicalEvaluationSpouse setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_consent"
        render={(props) => {
          return <PsychologicalEvaluationConsent setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_referral"
        render={(props) => {
          return <PsychologicalEvaluationReferral setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_additional_data"
        render={(props) => {
          return <PsychologicalEvaluationAdditionalData setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_1"
        render={(props) => {
          return <InterviewPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_2"
        render={(props) => {
          return <InterviewPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_3"
        render={(props) => {
          return <InterviewPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_4"
        render={(props) => {
          return <InterviewPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_5"
        render={(props) => {
          return <InterviewPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_6"
        render={(props) => {
          return <InterviewPg6 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_7"
        render={(props) => {
          return <InterviewPg7 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_8"
        render={(props) => {
          return <InterviewPg8 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/interview_pg_9"
        render={(props) => {
          return <InterviewPg9 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_1"
        render={(props) => {
          return <FamilyPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_2"
        render={(props) => {
          return <FamilyPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_3"
        render={(props) => {
          return <FamilyPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_4"
        render={(props) => {
          return <FamilyPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_5"
        render={(props) => {
          return <FamilyPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_6"
        render={(props) => {
          return <FamilyPg6 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_7"
        render={(props) => {
          return <FamilyPg7 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_8"
        render={(props) => {
          return <FamilyPg8 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_9"
        render={(props) => {
          return <FamilyPg9 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_10"
        render={(props) => {
          return <FamilyPg10 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_11"
        render={(props) => {
          return <FamilyPg11 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_12"
        render={(props) => {
          return <FamilyPg12 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_13"
        render={(props) => {
          return <FamilyPg13 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_14"
        render={(props) => {
          return <FamilyPg14 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/family_pg_15"
        render={(props) => {
          return <FamilyPg15 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/psychological_evaluation_report_summary"
        render={(props) => {
          return <PsychologicalEvaluationReportSummary setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/housing_pg_1"
        render={(props) => {
          return <HousingPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/housing_pg_2"
        render={(props) => {
          return <HousingPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/housing_pg_3"
        render={(props) => {
          return <HousingPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
  
    </React.Fragment>
  </>
  );
};

export default ApplicationViews;
