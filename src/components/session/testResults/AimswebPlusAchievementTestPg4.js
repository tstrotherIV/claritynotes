import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import TermOfParentalRights from "../../shared/TermOfParentalRights";
import ButtonNavigation from "../../shared/ButtonNavigation";

// pdf page 115

function AimswebPlusAchievementTestPg4(props) {
  const [aimswebPlusAchievementTestPg4, setAimswebPlusAchievementTestPg4] =
    useState({});

  const [item, setItem] = useState("");

  const next = "/continous_performance_test_3rd_ed";
  const back = "/aimsweb_plus_achievement_test_pg_3";

  const getData = () => {
    setAimswebPlusAchievementTestPg4(props.patientDetails);
    setItem("aimsweb_plus_achievement_test_pg_4_patientNotes");
  };

  useEffect(() => {
    getData();
  }, [props]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <div className="ml-5 mr-5 mt-3">
            <div className="d-flex flex-wrap text-white align-items-baseline">
              <h3 className="mb-1 col-2">Test Results</h3>
              <h4 className="mb-3">Aimsweb Plus Achievement Test</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-10">
                <Table striped>
                  <thead className="tableHeader text-center">
                    <tr className="tableBorder">
                      <th className="tdHeaderWidth" colSpan="6">
                        Definitions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <th scope="row" className="tdWidth m-0 p-0">
                        VO
                      </th>
                      <td className="tdWidth m-0 p-0">Vocabulary</td>
                      <td>
                        Identify the meaning of target words by selecting form
                        multiple choice options.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        SRF
                      </th>
                      <td className="m-0 p-0">Silent Reading Fluency</td>
                      <td className="m-0 p-0">
                        Read three stories divided into brief sections and
                        answer multiple-choice questions about each story.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        RC
                      </th>
                      <td className="m-0 p-0">Reading Comprehension</td>
                      <td className="m-0 p-0">
                        Read six passages of text and answer multiple-choice
                        questions about each passage.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        ORF
                      </th>
                      <td className="m-0 p-1">Oral Reading Fluency</td>
                      <td className="m-0 p-1">
                        Read two stories aloud, each for 1 minute.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        NSF
                      </th>
                      <td className="m-0 p-1">Number Sense Fluency</td>
                      <td className="m-0 p-0">
                        This is a summary of performance from the Number
                        Comparison Fluency-Triads and Mental Computation Fluency
                        tests.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        NCF-T
                      </th>
                      <td className="m-0 p-0">
                        Number Comparison Fluency-Triads
                      </td>
                      <td>
                        Mentally solves multiple-choice math problems, each
                        requiring the students to assess magnitude while
                        comparing a set of three numbers for three minutes.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        MCF
                      </th>
                      <td className="m-0 p-1">Mental Computation</td>
                      <td>
                        Mentally solves multiple-choice math computation
                        problems for four minutes.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="m-0 p-0">
                        CA
                      </th>
                      <td>Concepts & Applications</td>
                      <td>
                        Mentally solves various types of math problems and
                        states the correct answers.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <ButtonNavigation
            next={next}
            back={back}
            patient={props.patientId}
            patientNotes={aimswebPlusAchievementTestPg4}
          />
          <TermOfParentalRights
            questionId={item}
            patientId={props.patientId}
            item={item}
          />
        </div>
      </div>
    </>
  );
}

export default AimswebPlusAchievementTestPg4;
