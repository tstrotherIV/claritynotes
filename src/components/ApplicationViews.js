import { Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./login/login"
import CreateUser from "./createUser/createUser";
import PatientHomePage from "./patient/patientHome";
import SessionStep1 from "./session/sessionBeginning/sessionHome";
import PsychologicalEvaluation from "./session/psychologicalEvaluation/psychologicalEvaluation";
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
import PsychologicalEvaluationReportSummary from "./session/family/reportSummary/reportSummary";
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
import HistoryOfLegalPg6 from "./session/historyOfLegal/HistoryOfLegalPg6";
import HistoryOfLegalPg7 from "./session/historyOfLegal/HistoryOfLegalPg7";
import HistoryOfLegalPg8 from "./session/historyOfLegal/HistoryOfLegalPg8";
import HistoryOfLegalPg9 from "./session/historyOfLegal/HistoryOfLegalPg9";
import HistoryOfLegalPg10 from "./session/historyOfLegal/HistoryOfLegalPg10";
import HistoryOfLegalPg11 from "./session/historyOfLegal/HistoryOfLegalPg11";
import HistoryOfLegalPg12 from "./session/historyOfLegal/HistoryOfLegalPg12";
import HistoryOfLegalPg13 from "./session/historyOfLegal/HistoryOfLegalPg13";
import HistoryOfLegalPg14 from "./session/historyOfLegal/HistoryOfLegalPg14";
import HistoryOfLegalPg15 from "./session/historyOfLegal/HistoryOfLegalPg15";
import MentalHealthHistoryPg1 from "./session/mentalHealthHistory/MentalHealthHistoryPg1";
import MentalHealthHistoryPg2 from "./session/mentalHealthHistory/MentalHealthHistoryPg2";
import MentalHealthHistoryPg3  from "./session/mentalHealthHistory/MentalHealthHistoryPg3";
import MentalHealthHistoryPg4  from "./session/mentalHealthHistory/MentalHealthHistoryPg4";
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
import CognitiveSkillsPg1 from "./session/cognitiveSkills/CognitiveSkillsPg1";
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
import WechslerAdultIntelligenceScaleIVpg2 from "./session/testResults/WechslerAdultIntelligenceScaleIVpg2";
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
    <Switch>
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
         <Route
        exact
        path="/employment_pg_1"
        render={(props) => {
          return <EmploymentPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/employment_pg_2"
        render={(props) => {
          return <EmploymentPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/employment_pg_3"
        render={(props) => {
          return <EmploymentPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/education_pg_1"
        render={(props) => {
          return <EducationPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/education_pg_2"
        render={(props) => {
          return <EducationPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/education_pg_3"
        render={(props) => {
          return <EducationPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/education_pg_4"
        render={(props) => {
          return <EducationPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_1"
        render={(props) => {
          return <HistoryOfLegalPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_2"
        render={(props) => {
          return <HistoryOfLegalPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_3"
        render={(props) => {
          return <HistoryOfLegalPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_4"
        render={(props) => {
          return <HistoryOfLegalPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_5"
        render={(props) => {
          return <HistoryOfLegalPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_6"
        render={(props) => {
          return <HistoryOfLegalPg6 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_7"
        render={(props) => {
          return <HistoryOfLegalPg7 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_8"
        render={(props) => {
          return <HistoryOfLegalPg8 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_9"
        render={(props) => {
          return <HistoryOfLegalPg9 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_10"
        render={(props) => {
          return <HistoryOfLegalPg10 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_11"
        render={(props) => {
          return <HistoryOfLegalPg11 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_12"
        render={(props) => {
          return <HistoryOfLegalPg12 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_13"
        render={(props) => {
          return <HistoryOfLegalPg13 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
       <Route
        exact
        path="/history_of_legal_pg_14"
        render={(props) => {
          return <HistoryOfLegalPg14 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/history_of_legal_pg_15"
        render={(props) => {
          return <HistoryOfLegalPg15 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/mental_health_history_pg_1"
        render={(props) => {
          return <MentalHealthHistoryPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/mental_health_history_pg_2"
        render={(props) => {
          return <MentalHealthHistoryPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/mental_health_history_pg_3"
        render={(props) => {
          return <MentalHealthHistoryPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/mental_health_history_pg_4"
        render={(props) => {
          return <MentalHealthHistoryPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/medical_history_health_concerns_limitations_pg_1"
        render={(props) => {
          return <MedicalHistoryHealthConcernsLimitionsPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/neglect_abuse_trauma_loss_pg_1"
        render={(props) => {
          return <NeglectAbuseTraumaLossPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/neglect_abuse_trauma_loss_pg_2"
        render={(props) => {
          return <NeglectAbuseTraumaLossPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/neglect_abuse_trauma_loss_pg_3"
        render={(props) => {
          return <NeglectAbuseTraumaLossPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/neglect_abuse_trauma_loss_pg_4"
        render={(props) => {
          return <NeglectAbuseTraumaLossPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/neglect_abuse_trauma_loss_pg_5"
        render={(props) => {
          return <NeglectAbuseTraumaLossPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />  
      <Route
        exact
        path="/perpetrator_of_neglect_and_abuse_pg_1"
        render={(props) => {
          return <PerpetratorOfNeglectAndAbusePg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/perpetrator_of_neglect_and_abuse_pg_2"
        render={(props) => {
          return <PerpetratorOfNeglectAndAbusePg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/perpetrator_of_neglect_and_abuse_pg_3"
        render={(props) => {
          return <PerpetratorOfNeglectAndAbusePg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      /> 
      <Route
        exact
        path="/perpetrator_of_neglect_and_abuse_pg_4"
        render={(props) => {
          return <PerpetratorOfNeglectAndAbusePg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_1"
        render={(props) => {
          return <PartnerRelationshipPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_2"
        render={(props) => {
          return <PartnerRelationshipPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_3"
        render={(props) => {
          return <PartnerRelationshipPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_4"
        render={(props) => {
          return <PartnerRelationshipPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_5"
        render={(props) => {
          return <PartnerRelationshipPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_6"
        render={(props) => {
          return <PartnerRelationshipPg6 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_7"
        render={(props) => {
          return <PartnerRelationshipPg7 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_8"
        render={(props) => {
          return <PartnerRelationshipPg8 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_9"
        render={(props) => {
          return <PartnerRelationshipPg9 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/partner_relationship_pg_10"
        render={(props) => {
          return <PartnerRelationshipPg10 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/parenting_pg_1"
        render={(props) => {
          return <ParentingPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/parenting_pg_2"
        render={(props) => {
          return <ParentingPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/parenting_pg_3"
        render={(props) => {
          return <ParentingPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/positive_role_model_pg_1"
        render={(props) => {
          return <PositiveRoleModelPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/positive_role_model_pg_2"
        render={(props) => {
          return <PositiveRoleModelPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/parent_knowledge_pg_1"
        render={(props) => {
          return <ParentKnowledgePg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/cognitive_skills_pg_1"
        render={(props) => {
          return <CognitiveSkillsPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/material_resources_pg_1"
        render={(props) => {
          return <MaterialResourcesPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/behavioral_observations_and_testing_conditions_pg_1"
        render={(props) => {
          return <BehavioralObservationsAndTestingConditionsPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/behavioral_observations_and_testing_conditions_pg_2"
        render={(props) => {
          return <BehavioralObservationsAndTestingConditionsPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/behavioral_observations_and_testing_conditions_pg_3"
        render={(props) => {
          return <BehavioralObservationsAndTestingConditionsPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/behavioral_observations_and_testing_conditions_pg_4"
        render={(props) => {
          return <BehavioralObservationsAndTestingConditionsPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/behavioral_observations_and_testing_conditions_pg_5"
        render={(props) => {
          return <BehavioralObservationsAndTestingConditionsPg5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/procedures_administered_pg_1"
        render={(props) => {
          return <ProceduresAdministedPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/wasi-ii"
        render={(props) => {
          return <WasiII setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/wechsler_adult_intelligence_scale_IV"
        render={(props) => {
          return <WechslerAdultIntelligenceScaleIV setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/shipley_intelligence_assessment_2"
        render={(props) => {
          return <ShipleyIntelligenceAssessment2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/rait_pg_1"
        render={(props) => {
          return <RAITpg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/rait_pg_2"
        render={(props) => {
          return <RAITpg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/rait_pg_3"
        render={(props) => {
          return <RAITpg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/wechsler_adult_intelligence_scale_IV_pg_2"
        render={(props) => {
          return <WechslerAdultIntelligenceScaleIVpg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/wide_range_achievement_test_5"
        render={(props) => {
          return <WideRangeAchievementTest5 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/aimsweb_plus_achievement_test_pg_1"
        render={(props) => {
          return <AimswebPlusAchievementTestPg1 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/aimsweb_plus_achievement_test_pg_2"
        render={(props) => {
          return <AimswebPlusAchievementTestPg2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/aimsweb_plus_achievement_test_pg_3"
        render={(props) => {
          return <AimswebPlusAchievementTestPg3 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/aimsweb_plus_achievement_test_pg_4"
        render={(props) => {
          return <AimswebPlusAchievementTestPg4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/continous_performance_test_3rd_ed"
        render={(props) => {
          return <ContinuousPerformanceTest3rdEd setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/computerized_performance_neurocognitive_assessment"
        render={(props) => {
          return <ComputerizedNeurocognitiveAssessment setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/paulhus_deception_scale"
        render={(props) => {
          return <PaulasDeceptionScale setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/minnesota_multiphasic_personality_inventory_2"
        render={(props) => {
          return <MinnesotaMultiphasicPersonalityInventory2 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/substance_abuse_subtle_screening_inventory_4"
        render={(props) => {
          return <SubstanceAbuseSubtleScreeningInventory4 setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/iowa_gambling_task"
        render={(props) => {
          return <IowaGamblingTask setUser={setUser} hasUser={hasUser} {...props} />;
        }}
      />
    </Switch>
  </>
  );
};

export default ApplicationViews;
