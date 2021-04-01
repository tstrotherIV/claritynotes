import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import DataManager from "../../../data_module/DataManager";
import Header from "../PsychologicalHeading";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const loggedUser = sessionStorage.getItem(`logged_in_user`);
  const session_id = sessionStorage.getItem(`session_id`);

  const handleLogout = () => {
    DataManager.logoutUser(session_id).then(() => {
      sessionStorage.removeItem("logged_in_user");
      sessionStorage.removeItem("session_id");
      props.history.push("/");
    });
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="false" color="white" className="nav-container">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar onClick={toggle}>
            <NavItem>
              <NavLink href="/patient">Home</NavLink>
            </NavItem>
            {loggedUser ? (
              <>
                <NavItem>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/psychological_evaluation">
                    Psychological Evaluation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/interview_pg_1">Interview</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/family_pg_1">Family</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/housing_pg_1">Housing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/employment_pg_1">Employment</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/education_pg_1">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/history_of_legal_pg_1">
                    History of Legal
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/history_of_legal_pg_6">
                    Substance Abuse
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/mental_health_history_pg_1">
                    Mental Health History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/medical_history_health_concerns_limitations_pg_1">
                    Medical History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/neglect_abuse_trauma_loss_pg_1">
                    Neglect•Abuse•Trauma•Loss
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/perpetrator_of_neglect_and_abuse_pg_1">
                    Perpetrator of Neglect
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/partner_relationship_pg_1">
                    Partner Relationship
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/parenting_pg_1">Parenting</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/positive_role_model_pg_1">
                    Positive Role Model
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/parent_knowledge_pg_1">
                    Parent Knowledge
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/cognitive_skills_pg_1">
                    Cognitive Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/material_resources_pg_1">
                    Material Resources
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/behavioral_observations_and_testing_conditions_pg_1">
                    Behavioral Observations and Testing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/procedures_administered_pg_1">
                    Procedures Administered
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/wasi-ii">Test Section</NavLink>
                </NavItem>
              </>
            ) : (
              ""
            )}
          </Nav>
        </Collapse>
          <Header />
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
