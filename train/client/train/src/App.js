import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home";
import AllTrainsPage from "./Components/SingleTrain";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div style={{ display: "flex", gap: "1px" }}>
              <a class="navbar-brand flex" href="#">
                <svg
                  height="45px"
                  width="45px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60.082 60.082"
                >
                  <g>
                    <g>
                      <path
                        fill="#010002"
                        d="M30.039,12.38c2.515,0,4.552-2.039,4.552-4.552h-9.104C25.488,10.342,27.527,12.38,30.039,12.38z"
                      />
                      <path
                        fill="#010002"
                        d="M36.714,16.087c-2.199-1.042-4.49-1.388-6.57-1.388c-4.153,0-7.452,1.385-7.452,1.385
			s-3.074,7.086-4.335,9.377c-0.342,0.62-0.38,1.221-0.234,1.754c0.038,1.181,0.81,2.385,2.32,2.484
			c1.087,0.072,2.174,0.11,3.261,0.126v0.035l-0.052,0.002l-4.061,19.309h4.086v8.307c0,1.438,1.054,2.604,2.532,2.604
			c1.478,0,2.677-1.166,2.677-2.604v-8.307h1.944v8.256c0,1.438,1.198,2.604,2.679,2.604c1.478,0,2.676-1.165,2.676-2.604
			l0.039-8.256h4.568l-3.535-14.51c0.508,0.775,1.426,1.229,2.291,1.229c0.935,0,1.803-0.527,2.017-1.748
			C42.738,27.428,41.949,20.903,36.714,16.087z M34.481,23.751l-0.014,9.857c-0.004,2.769-0.008,4.945-0.008,5.012L34.37,57.429
			c0,0.438-0.388,0.793-0.864,0.793c-0.478,0-0.865-0.355-0.865-0.793V39.222c0.002-0.312-0.059-1.203-0.758-1.922
			c-0.496-0.51-1.189-0.791-1.956-0.791h-0.024h-0.01c-1.69,0.02-2.693,1.312-2.812,2.579l-0.008,0.084v0.083V57.48
			c0,0.437-0.388,0.793-0.865,0.793c-0.531,0-0.72-0.429-0.72-0.793V39.993l0.027-10.163l0.002-1.022
			c1.265-0.006,2.529-0.046,3.795-0.136c3.09-0.218,3.111-5.052,0-4.832c-2.012,0.143-4.022,0.171-6.033,0.107
			c0.496-1.04,0.694-2.071,0.902-2.299v1.307h1.003v-5.777c0.414-0.109,0.892-0.221,1.414-0.319v-1.152h1.208v0.959
			c0.727-0.095,1.51-0.156,2.337-0.156c0.686,0,1.348,0.049,1.993,0.132v-0.936h1.207v1.142c0.393,0.086,0.774,0.185,1.147,0.305
			L34.481,23.751z M36.903,32.858c-0.014,0.082-0.021,0.162-0.027,0.24l-0.592-2.428c0.004-2.566,0.008-5.189,0.01-6.918
			C37.43,26.512,37.471,29.612,36.903,32.858z"
                      />
                      <path
                        fill="#010002"
                        d="M22.844,6.7h14.393c0.661,0,1.195-0.536,1.195-1.196c0-0.662-0.534-1.197-1.195-1.197
			c-0.277,0-0.635,0-1.084,0c-3.089,0-2.41-4.072-6.112-4.298c-3.702-0.227-4.298,4.159-6.451,4.298
			c-0.646,0.042-0.967,0.059-1.107,0.061C22,4.523,21.647,4.97,21.647,5.504C21.647,6.165,22.183,6.7,22.844,6.7z"
                      />
                      <path
                        fill="#010002"
                        d="M22.483,4.368c0.037-0.012,0.073-0.026,0.111-0.034C22.437,4.353,22.298,4.373,22.483,4.368z"
                      />
                      <path
                        fill="#010002"
                        d="M22.594,4.334c0.081-0.017,0.164-0.027,0.249-0.027C22.844,4.307,22.715,4.319,22.594,4.334z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a class="navbar-brand flex" href="#">
                Track Master
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">ALL TRAINS</Nav.Link>
              <Nav.Link href="/singleTrain"> Train Details</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleTrain/:trainNumber?" element={<AllTrainsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
