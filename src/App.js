import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/component/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route element={<Layout />}>  */}
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/individuals" element={<IndividualPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareerPage />} />  */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
