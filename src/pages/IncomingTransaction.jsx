import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Loading from '../components/Loading'

const IncomingTransaction = () => {
  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });

  const [isLoading, setIsLoading] = useState(false)

  function Duration(dueDate, startDate) {
    const due = new Date(dueDate);
    startDate = new Date();

    let duration;

    if (startDate < due) {
      duration = new Date(due - startDate);
    }

    let years = duration.getFullYear() - 1970;
    let months = duration.getMonth();
    let days = duration.getDate();

    let yearTxt = "year";
    let monthTxt = "month";
    let dayTxt = "day";

    if (years > 1) yearTxt += "s";
    if (months > 1) monthTxt += "s";
    if (days > 1) dayTxt += "s";

    if (years >= 1) {
      duration = `${years} ${yearTxt} ${months} ${monthTxt} ${days} ${dayTxt}`;
    } else if (months >= 1) {
      duration = `${months} ${monthTxt} ${days} ${dayTxt}`;
    } else {
      duration = `${days} ${dayTxt}`;
    }
    return duration;
  }


  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    })
  }, [])

  if(isLoading) {
    return <Loading />
  }

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="rounded shadow border-0 bg-dark text-white p-3">
              <h6 className="text-light mb-4 mx-4">Transactions List</h6>
              <Table striped bordered hover variant="dark">
                <thead style={{ height: "60px" }}>
                  <tr className="text-danger text-center align-items-center">
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subscription Period</th>
                    <th>Status Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {transaction?.map((data, index) => {
                    return (
                      <>
                        <tr style={{ height: "60px" }} className="text-center">
                          <td>{index + 1}</td>
                          <td>{data.user.fullname}</td>
                          <td>{data.user.email}</td>
                          <td>{Duration(data.dueDate, data.startDate)}</td>
                          <td className={data.status === "success" ? "text-success" : data.status === "pending" ? "text-warning" : "text-danger"}>{data.status === "success" ? "Success" : data.status === "pending" ? "pending" : "Failed"}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IncomingTransaction;
