import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Login from "./login/login";
// import CreateUser from "./createUser/createUser";
import PatientHomePage from "./patient/patientHome";
import SessionStep1 from "./session/sessionBeginning/sessionHome";
import PsychologicalEvaluation from "./session/psychologicalEvaluation/psychologicalEvaluation";
import PsychologicalEvaluationInit from "./session/psychologicalEvaluation/psychologicalEvaluationInit";
import PsychologicalEvaluationFamily from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationFamily";
import PsychologicalEvaluationSiblings from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationSiblings";
import PsychologicalEvaluationChildren from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationChildren";
import PsychologicalEvaluationSpouse from "./session/psychologicalEvaluationFamily/PsychologicalEvaluationSpouse";
import PsychologicalEvaluationConsent from "./session/consent/consent";
import PsychologicalEvaluationReferral from "./session/referral/referral";
import PsychologicalEvaluationAdditionalData from "./session/additionalData/additionalData";
import InterviewPg1 from "./session/interviews/InterviewPg1";
import InterviewPg2 from "./session/interviews/InterviewPg2";
import InterviewPg3 from "./session/interviews/InterviewPg3";
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
import HousingPg1 from "./session/housing/HousingPg1";
import HousingPg2 from "./session/housing/HousingPg2";
import HousingPg3 from "./session/housing/HousingPg3";
import EmploymentPg1 from "./session/employment/EmploymentPg1";
import EmploymentPg2 from "./session/employment/EmploymentPg2";
import EmploymentPg3 from "./session/employment/EmploymentPg3";
import EducationPg1 from "./session/education/EducationPg1";
import EducationPg2 from "./session/education/EducationPg2";
import EducationPg3 from "./session/education/EducationPg3";
import EducationPg4 from "./session/education/EducationPg4";
import HistoryOfLegalPg1 from "./session/historyOfLegal/HistoryOfLegalPg1";
import HistoryOfLegalPg2 from "./session/historyOfLegal/HistoryOfLegalPg2";
import HistoryOfLegalPg3 from "./session/historyOfLegal/HistoryOfLegalPg3";
import HistoryOfLegalPg4 from "./session/historyOfLegal/HistoryOfLegalPg4";
import HistoryOfLegalPg5 from "./session/historyOfLegal/HistoryOfLegalPg5";
// import HistoryOfLegalPg6 from "./session/historyOfLegal/HistoryOfLegalPg6";
// import HistoryOfLegalPg7 from "./session/historyOfLegal/HistoryOfLegalPg7";
// import HistoryOfLegalPg8 from "./session/historyOfLegal/HistoryOfLegalPg8";
// import HistoryOfLegalPg9 from "./session/historyOfLegal/HistoryOfLegalPg9";
// import HistoryOfLegalPg10 from "./session/historyOfLegal/HistoryOfLegalPg10";
// import HistoryOfLegalPg11 from "./session/historyOfLegal/HistoryOfLegalPg11";
// import HistoryOfLegalPg12 from "./session/historyOfLegal/HistoryOfLegalPg12";
// import HistoryOfLegalPg13 from "./session/historyOfLegal/HistoryOfLegalPg13";
// import HistoryOfLegalPg14 from "./session/historyOfLegal/HistoryOfLegalPg14";
// import HistoryOfLegalPg15 from "./session/historyOfLegal/HistoryOfLegalPg15";

import MentalHealthHistoryPg1 from "./session/mentalHealthHistory/MentalHealthHistoryPg1";
import MedicalHistoryHealthConcernsLimitionsPg1 from "./session/medicalHistoryHealthConcernsLimitations/MedicalHistoryHealthConcernsLimitationsPg1";
import NeglectAbuseTraumaLossPg1 from "./session/neglectAbuseTraumaLoss/NeglectAbuseTraumaLossPg1";
import NeglectAbuseTraumaLossPg2 from "./session/neglectAbuseTraumaLoss/NeglectAbuseTraumaLossPg2";
import NeglectAbuseTraumaLossPg3 from "./session/neglectAbuseTraumaLoss/NeglectAbuseTraumaLossPg3";
import NeglectAbuseTraumaLossPg4 from "./session/neglectAbuseTraumaLoss/NeglectAbuseTraumaLossPg4";
import NeglectAbuseTraumaLossPg5 from "./session/neglectAbuseTraumaLoss/NeglectAbuseTraumaLossPg5";
import PerpetratorOfNeglectAndAbusePg1 from "./session/perpetratorOfNeglectAndAbuse/PerpetratorOfNeglectAndAbusePg1";
import PerpetratorOfNeglectAndAbusePg2 from "./session/perpetratorOfNeglectAndAbuse/PerpetratorOfNeglectAndAbusePg2";
import PerpetratorOfNeglectAndAbusePg3 from "./session/perpetratorOfNeglectAndAbuse/PerpetratorOfNeglectAndAbusePg3";
import PerpetratorOfNeglectAndAbusePg4 from "./session/perpetratorOfNeglectAndAbuse/PerpetratorOfNeglectAndAbusePg4";
import PartnerRelationshipPg1 from "./session/partnerRelationship/PartnerRelationshipPg1";
import PartnerRelationshipPg2 from "./session/partnerRelationship/PartnerRelationshipPg2";
import PartnerRelationshipPg3 from "./session/partnerRelationship/PartnerRelationshipPg3";
import PartnerRelationshipPg4 from "./session/partnerRelationship/PartnerRelationshipPg4";
import PartnerRelationshipPg5 from "./session/partnerRelationship/PartnerRelationshipPg5";
import PartnerRelationshipPg6 from "./session/partnerRelationship/PartnerRelationshipPg6";
import PartnerRelationshipPg7 from "./session/partnerRelationship/PartnerRelationshipPg7";
import PartnerRelationshipPg8 from "./session/partnerRelationship/PartnerRelationshipPg8";
import PartnerRelationshipPg9 from "./session/partnerRelationship/PartnerRelationshipPg9";
import PartnerRelationshipPg10 from "./session/partnerRelationship/PartnerRelationshipPg10";
import ParentingPg1 from "./session/parenting/ParentingPg1";
import ParentingPg2 from "./session/parenting/ParentingPg2";
import ParentingPg3 from "./session/parenting/ParentingPg3";
import PositiveRoleModelPg1 from "./session/positiveRoleModel/PositiveRoleModelPg1";
import PositiveRoleModelPg2 from "./session/positiveRoleModel/PositiveRoleModelPg2";
import ParentKnowledgePg1 from "./session/parentKnowledge/ParentKnowledgePg1";
import MaterialResourcesPg1 from "./session/materialResources/MaterialResourcesPg1";
import BehavioralObservationsAndTestingConditionsPg1 from "./session/behavioralObservationsAndTestingConditions/BehavioralObservationsAndTestingConditionsPg1";
import BehavioralObservationsAndTestingConditionsPg2 from "./session/behavioralObservationsAndTestingConditions/BehavorialObservationsAndTestingConditionsPg2";
import BehavioralObservationsAndTestingConditionsPg3 from "./session/behavioralObservationsAndTestingConditions/BehavorialObservationsAndTestingConditionsPg3";
import BehavioralObservationsAndTestingConditionsPg4 from "./session/behavioralObservationsAndTestingConditions/BehavorialObservationsAndTestingConditionsPg4";
import BehavioralObservationsAndTestingConditionsPg5 from "./session/behavioralObservationsAndTestingConditions/BehavorialObservationsAndTestingConditionsPg5";
import ProceduresAdministedPg1 from "./session/proceduresAdministered/ProceduresAdministeredPg1";
import WasiII from "./session/testResults/Wasi-ii";
import WechslerAdultIntelligenceScaleIV from "./session/testResults/WechslerAdultIntelligenceScaleIV";
import ShipleyIntelligenceAssessment2 from "./session/testResults/ShipleyIntelligenceAssessment2";
import RAITpg1 from "./session/testResults/RAITpg1";
import RAITpg2 from "./session/testResults/RAITpg2";
import RAITpg3 from "./session/testResults/RAITpg3";
import RAITpg4 from "./session/testResults/Raitpg4";
import WideRangeAchievementTest5 from "./session/testResults/WideRangeAchievementTest5";
import AimswebPlusAchievementTestPg1 from "./session/testResults/AimswebPlusAchievementTestPg1";
import AimswebPlusAchievementTestPg2 from "./session/testResults/AimswebPlusAchievementTestPg2";
import AimswebPlusAchievementTestPg3 from "./session/testResults/AimswebPlusAchievementTestPg3";
import AimswebPlusAchievementTestPg4 from "./session/testResults/AimswebPlusAchievementTestPg4";
import ContinuousPerformanceTest3rdEd from "./session/testResults/ContinuousPerformanceTest3rdEd";
import ComputerizedNeurocognitiveAssessment from "./session/testResults/ComputerizedNeurocognitiveAssessment";
import PaulasDeceptionScale from "./session/testResults/PaulhasDeceptionScale";
import MinnesotaMultiphasicPersonalityInventory2 from "./session/testResults/MinnesotaMultiphasicPersonalityInventory2";
import SubstanceAbuseSubtleScreeningInventory4 from "./session/testResults/SubstanceAbuseSubtleScreeningInventory4";
import IowaGamblingTask from "./session/testResults/IowaGamblingTask";
import MillonClinicalMultiaxialInventoryIVPg1 from "./session/testResults/MillonClinicalMultiaxialInventoryIVPg1";
import MillonClinicalMultiaxialInventoryIVPg2 from "./session/testResults/MillonClinicalMultiaxialInventoryIVPg2";
import RorschPerformanceAssessmentSystem from "./session/testResults/RorschPerformanceAssessmentSystem";
import ThematicApperceptionsTest from "./session/testResults/ThematicApperceptionsTest";
import CreateAcct from "./Auth/createAcct";
import DataManager from "../data_module/DataManager";
import SubstanceAbusePg1 from "./session/substanceAbuse/SubstanceAbusePg1";
import SubstanceAbusePg2 from "./session/substanceAbuse/SubstanceAbusePg2";
import SubstanceAbusePg3 from "./session/substanceAbuse/SubstanceAbusePg3";
import SubstanceAbusePg4 from "./session/substanceAbuse/SubstanceAbusePg4";
import SubstanceAbusePg5 from "./session/substanceAbuse/SubstanceAbusePg5";
import SubstanceAbusePg6 from "./session/substanceAbuse/SubstanceAbusePg6";
import SubstanceAbusePg7 from "./session/substanceAbuse/SubstanceAbusePg7";
import SubstanceAbusePg8 from "./session/substanceAbuse/SubstanceAbusePg8";
import SubstanceAbusePg9 from "./session/substanceAbuse/SubstanceAbusePg9";
import SubstanceAbusePg10 from "./session/substanceAbuse/SubstanceAbusePg10";
import SubstanceAbusePg11 from "./session/substanceAbuse/SubstanceAbusePg11";
import SubstanceAbusePg12 from "./session/substanceAbuse/SubstanceAbusePg12";
import SubstanceAbusePg13 from "./session/substanceAbuse/SubstanceAbusePg13";
import SubstanceAbusePg14 from "./session/substanceAbuse/SubstanceAbusePg14";
import SubstanceAbusePg15 from "./session/substanceAbuse/SubstanceAbusePg15";
import MentalHealthHistoryPg2 from "./session/mentalHealthHistory/MentalHealthHistoryPg2";
import MentalHealthHistoryPg3 from "./session/mentalHealthHistory/MentalHealthHistoryPg3";
import MentalHealthHistoryPg4 from "./session/mentalHealthHistory/MentalHealthHistoryPg4";
import MentalHealthHistoryPg5 from "./session/mentalHealthHistory/MentalHealthHistoryPg5";
import MentalHealthHistoryPg6 from "./session/mentalHealthHistory/MentalHealthHistoryPg6";
import MentalHealthHistoryPg7 from "./session/mentalHealthHistory/MentalHealthHistoryPg7";
import MentalHealthHistoryPg8 from "./session/mentalHealthHistory/MentalHealthHistoryPg8";
import MentalHealthHistoryPg9 from "./session/mentalHealthHistory/MentalHealthHistoryPg9";
import MentalHealthHistoryPg10 from "./session/mentalHealthHistory/MentalHealthHistoryPg10";
import MentalHealthHistoryPg11 from "./session/mentalHealthHistory/MentalHealthHistoryPg11";
import MentalHealthHistoryPg12 from "./session/mentalHealthHistory/MentalHealthHistoryPg12";
import MentalHealthHistoryPg13 from "./session/mentalHealthHistory/MentalHealthHistoryPg13";
import MentalHealthHistoryPg14 from "./session/mentalHealthHistory/MentalHealthHistoryPg14";
import MentalHealthHistoryPg15 from "./session/mentalHealthHistory/MentalHealthHistoryPg15";
import MentalHealthHistoryPg16 from "./session/mentalHealthHistory/MentalHealthHistoryPg16";
import MentalHealthHistoryPg17 from "./session/mentalHealthHistory/MentalHealthHistoryPg17";
import MentalHealthHistoryPg18 from "./session/mentalHealthHistory/MentalHealthHistoryPg18";
import MentalHealthHistoryPg19 from "./session/mentalHealthHistory/MentalHealthHistoryPg19";
import MentalHealthHistoryPg20 from "./session/mentalHealthHistory/MentalHealthHistoryPg20";
import MentalHealthHistoryPg21 from "./session/mentalHealthHistory/MentalHealthHistoryPg21";
import MentalHealthHistoryPg22 from "./session/mentalHealthHistory/MentalHealthHistoryPg22";
import MentalHealthHistoryPg23 from "./session/mentalHealthHistory/MentalHealthHistoryPg23";

//Lazy Load Refactoring
const CreateUser = lazy(() => import("./createUser/createUser"));

const ApplicationViews = (props) => {
  const [patientDetails, setPatientDetails] = useState({});

  let hasUser = false;
  let userId = sessionStorage.getItem("logged_in_user");
  let patientId = sessionStorage.getItem("patient_id");

  const getData = async () => {
    const check_for_patient = await sessionStorage.getItem("patient_id");
    DataManager.getPatient(check_for_patient).then((patientInfo) => {
      setPatientDetails(patientInfo);
    });
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <Login
                hasUser={hasUser}
                patientId={patientId}
                getData={getData}
                {...props}
              />
            );
          }}
        />
        <Switch>
          <Route
            exact
            path="/createAcct"
            render={(props) => {
              return <CreateAcct {...props} />;
            }}
          />
          <Route
            exact
            path="/createUser"
            component={CreateUser}
            hasUser={hasUser}
            patientId={patientId}
            {...props}
          />
          {!hasUser ? (
            <>
              <Route
                exact
                path="/patient"
                render={(props) => {
                  return (
                    <PatientHomePage
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/sessionStep1"
                render={(props) => {
                  return (
                    <SessionStep1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation"
                render={(props) => {
                  return (
                    <PsychologicalEvaluation
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluationInit"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationInit
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_family"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationFamily
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_siblings"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationSiblings
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_children"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationChildren
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_spouse"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationSpouse
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_consent"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationConsent
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_referral"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationReferral
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/psychological_evaluation_additional_data"
                render={(props) => {
                  return (
                    <PsychologicalEvaluationAdditionalData
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      userId={userId}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_1"
                render={(props) => {
                  return (
                    <InterviewPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_2"
                render={(props) => {
                  return (
                    <InterviewPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_3"
                render={(props) => {
                  return (
                    <InterviewPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_4"
                render={(props) => {
                  return (
                    <InterviewPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_5"
                render={(props) => {
                  return (
                    <InterviewPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_6"
                render={(props) => {
                  return (
                    <InterviewPg6
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_7"
                render={(props) => {
                  return (
                    <InterviewPg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_8"
                render={(props) => {
                  return (
                    <InterviewPg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/interview_pg_9"
                render={(props) => {
                  return (
                    <InterviewPg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_1"
                render={(props) => {
                  return (
                    <FamilyPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_2"
                render={(props) => {
                  return (
                    <FamilyPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_3"
                render={(props) => {
                  return (
                    <FamilyPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_4"
                render={(props) => {
                  return (
                    <FamilyPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_5"
                render={(props) => {
                  return (
                    <FamilyPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_6"
                render={(props) => {
                  return (
                    <FamilyPg6
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_7"
                render={(props) => {
                  return (
                    <FamilyPg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_8"
                render={(props) => {
                  return (
                    <FamilyPg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_9"
                render={(props) => {
                  return (
                    <FamilyPg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_10"
                render={(props) => {
                  return (
                    <FamilyPg10
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_11"
                render={(props) => {
                  return (
                    <FamilyPg11
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_12"
                render={(props) => {
                  return (
                    <FamilyPg12
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_13"
                render={(props) => {
                  return (
                    <FamilyPg13
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_14"
                render={(props) => {
                  return (
                    <FamilyPg14
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/family_pg_15"
                render={(props) => {
                  return (
                    <FamilyPg15
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              {/* <Route
        exact
        path="/psychological_evaluation_report_summary"
        render={(props) => {
          return <PsychologicalEvaluationReportSummary  hasUser={hasUser}  patientId={patientId} {...props} />;
        }}
      /> */}
              <Route
                exact
                path="/housing_pg_1"
                render={(props) => {
                  return (
                    <HousingPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/housing_pg_2"
                render={(props) => {
                  return (
                    <HousingPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/housing_pg_3"
                render={(props) => {
                  return (
                    <HousingPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/employment_pg_1"
                render={(props) => {
                  return (
                    <EmploymentPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/employment_pg_2"
                render={(props) => {
                  return (
                    <EmploymentPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/employment_pg_3"
                render={(props) => {
                  return (
                    <EmploymentPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/education_pg_1"
                render={(props) => {
                  return (
                    <EducationPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/education_pg_2"
                render={(props) => {
                  return (
                    <EducationPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/education_pg_3"
                render={(props) => {
                  return (
                    <EducationPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/education_pg_4"
                render={(props) => {
                  return (
                    <EducationPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_1"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_2"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_3"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_4"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_5"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg1"
                render={(props) => {
                  return (
                    <SubstanceAbusePg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg2"
                render={(props) => {
                  return (
                    <SubstanceAbusePg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg3"
                render={(props) => {
                  return (
                    <SubstanceAbusePg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg4"
                render={(props) => {
                  return (
                    <SubstanceAbusePg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg5"
                render={(props) => {
                  return (
                    <SubstanceAbusePg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg6"
                render={(props) => {
                  return (
                    <SubstanceAbusePg6
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg7"
                render={(props) => {
                  return (
                    <SubstanceAbusePg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg8"
                render={(props) => {
                  return (
                    <SubstanceAbusePg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg9"
                render={(props) => {
                  return (
                    <SubstanceAbusePg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg10"
                render={(props) => {
                  return (
                    <SubstanceAbusePg10
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg11"
                render={(props) => {
                  return (
                    <SubstanceAbusePg11
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg12"
                render={(props) => {
                  return (
                    <SubstanceAbusePg12
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg13"
                render={(props) => {
                  return (
                    <SubstanceAbusePg13
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg14"
                render={(props) => {
                  return (
                    <SubstanceAbusePg14
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_pg15"
                render={(props) => {
                  return (
                    <SubstanceAbusePg15
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              {/* <Route
                exact
                path="/history_of_legal_pg_7"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_8"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_9"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_10"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg10
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_11"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg11
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_12"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg12
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_13"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg13
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_14"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg14
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/history_of_legal_pg_15"
                render={(props) => {
                  return (
                    <HistoryOfLegalPg15
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              /> */}
              <Route
                exact
                path="/mental_health_history_pg_1"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_2"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_3"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_4"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_5"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_6"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg6
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_7"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_8"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_9"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_10"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg10
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_11"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg11
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_12"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg12
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_13"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg13
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_14"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg14
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_15"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg15
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_16"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg16
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_17"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg17
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_18"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg18
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_19"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg19
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_20"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg20
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_21"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg21
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_22"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg22
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/mental_health_history_pg_23"
                render={(props) => {
                  return (
                    <MentalHealthHistoryPg23
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/medical_history_health_concerns_limitations_pg_1"
                render={(props) => {
                  return (
                    <MedicalHistoryHealthConcernsLimitionsPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/neglect_abuse_trauma_loss_pg_1"
                render={(props) => {
                  return (
                    <NeglectAbuseTraumaLossPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/neglect_abuse_trauma_loss_pg_2"
                render={(props) => {
                  return (
                    <NeglectAbuseTraumaLossPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/neglect_abuse_trauma_loss_pg_3"
                render={(props) => {
                  return (
                    <NeglectAbuseTraumaLossPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/neglect_abuse_trauma_loss_pg_4"
                render={(props) => {
                  return (
                    <NeglectAbuseTraumaLossPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/neglect_abuse_trauma_loss_pg_5"
                render={(props) => {
                  return (
                    <NeglectAbuseTraumaLossPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/perpetrator_of_neglect_and_abuse_pg_1"
                render={(props) => {
                  return (
                    <PerpetratorOfNeglectAndAbusePg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/perpetrator_of_neglect_and_abuse_pg_2"
                render={(props) => {
                  return (
                    <PerpetratorOfNeglectAndAbusePg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/perpetrator_of_neglect_and_abuse_pg_3"
                render={(props) => {
                  return (
                    <PerpetratorOfNeglectAndAbusePg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/perpetrator_of_neglect_and_abuse_pg_4"
                render={(props) => {
                  return (
                    <PerpetratorOfNeglectAndAbusePg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_1"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_2"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_3"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_4"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_5"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_6"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg6
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_7"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg7
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_8"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg8
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_9"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg9
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/partner_relationship_pg_10"
                render={(props) => {
                  return (
                    <PartnerRelationshipPg10
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/parenting_pg_1"
                render={(props) => {
                  return (
                    <ParentingPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/parenting_pg_2"
                render={(props) => {
                  return (
                    <ParentingPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/parenting_pg_3"
                render={(props) => {
                  return (
                    <ParentingPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/positive_role_model_pg_1"
                render={(props) => {
                  return (
                    <PositiveRoleModelPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/positive_role_model_pg_2"
                render={(props) => {
                  return (
                    <PositiveRoleModelPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/parent_knowledge_pg_1"
                render={(props) => {
                  return (
                    <ParentKnowledgePg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/material_resources_pg_1"
                render={(props) => {
                  return (
                    <MaterialResourcesPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/behavioral_observations_and_testing_conditions_pg_1"
                render={(props) => {
                  return (
                    <BehavioralObservationsAndTestingConditionsPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/behavioral_observations_and_testing_conditions_pg_2"
                render={(props) => {
                  return (
                    <BehavioralObservationsAndTestingConditionsPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/behavioral_observations_and_testing_conditions_pg_3"
                render={(props) => {
                  return (
                    <BehavioralObservationsAndTestingConditionsPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/behavioral_observations_and_testing_conditions_pg_4"
                render={(props) => {
                  return (
                    <BehavioralObservationsAndTestingConditionsPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/behavioral_observations_and_testing_conditions_pg_5"
                render={(props) => {
                  return (
                    <BehavioralObservationsAndTestingConditionsPg5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/procedures_administered_pg_1"
                render={(props) => {
                  return (
                    <ProceduresAdministedPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/wasi-ii"
                render={(props) => {
                  return (
                    <WasiII
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/wechsler_adult_intelligence_scale_IV"
                render={(props) => {
                  return (
                    <WechslerAdultIntelligenceScaleIV
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/shipley_intelligence_assessment_2"
                render={(props) => {
                  return (
                    <ShipleyIntelligenceAssessment2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/rait_pg_1"
                render={(props) => {
                  return (
                    <RAITpg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/rait_pg_2"
                render={(props) => {
                  return (
                    <RAITpg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/rait_pg_3"
                render={(props) => {
                  return (
                    <RAITpg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/rait_pg_4"
                render={(props) => {
                  return (
                    <RAITpg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/wide_range_achievement_test_5"
                render={(props) => {
                  return (
                    <WideRangeAchievementTest5
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/aimsweb_plus_achievement_test_pg_1"
                render={(props) => {
                  return (
                    <AimswebPlusAchievementTestPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/aimsweb_plus_achievement_test_pg_2"
                render={(props) => {
                  return (
                    <AimswebPlusAchievementTestPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/aimsweb_plus_achievement_test_pg_3"
                render={(props) => {
                  return (
                    <AimswebPlusAchievementTestPg3
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/aimsweb_plus_achievement_test_pg_4"
                render={(props) => {
                  return (
                    <AimswebPlusAchievementTestPg4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/continous_performance_test_3rd_ed"
                render={(props) => {
                  return (
                    <ContinuousPerformanceTest3rdEd
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/computerized_performance_neurocognitive_assessment"
                render={(props) => {
                  return (
                    <ComputerizedNeurocognitiveAssessment
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/paulhus_deception_scale"
                render={(props) => {
                  return (
                    <PaulasDeceptionScale
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/minnesota_multiphasic_personality_inventory_2"
                render={(props) => {
                  return (
                    <MinnesotaMultiphasicPersonalityInventory2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/substance_abuse_subtle_screening_inventory_4"
                render={(props) => {
                  return (
                    <SubstanceAbuseSubtleScreeningInventory4
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/iowa_gambling_task"
                render={(props) => {
                  return (
                    <IowaGamblingTask
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/millon_clinical_multiaxial_inventory_iv_pg_1"
                render={(props) => {
                  return (
                    <MillonClinicalMultiaxialInventoryIVPg1
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/millon_clinical_multiaxial_inventory_iv_pg_2"
                render={(props) => {
                  return (
                    <MillonClinicalMultiaxialInventoryIVPg2
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/rorschach_performance_assessment_system"
                render={(props) => {
                  return (
                    <RorschPerformanceAssessmentSystem
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/thematic_apperceptions_test"
                render={(props) => {
                  return (
                    <ThematicApperceptionsTest
                      hasUser={hasUser}
                      patientId={patientId}
                      patientDetails={patientDetails}
                      getData={getData}
                      {...props}
                    />
                  );
                }}
              />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default ApplicationViews;
