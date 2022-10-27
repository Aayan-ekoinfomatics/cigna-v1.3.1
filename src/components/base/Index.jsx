import { useEffect, useState } from "react";
import Header from "../global components/Header.jsx";
import Sidebar from "../global components/Sidebar.jsx";
import DashboardOne from "../dashboard/DashboardOne.jsx";
import DashboardTwo from "../dashboard/DashboardTwo.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";
import { useRecoilState } from "recoil";
import axios from "axios";

function index() {
  const baseURL = "http://35.193.222.55:8001/";

  const [apiData, setApiData] = useRecoilState(apiDataAtom);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiData({ apiData: response.data });
    });
    console.log(apiData?.apiData?.data);
  }, []);

  return (
    <Router>
      <div className="absolute top-0 left-0 h-full">
        <Sidebar />
      </div>
      <div className="w-[85%] ml-auto bg-[#f1f5f9] pb-4 pt-4">
        <div className="fixed top-0 z-[999] w-[85%] shadow-md">
          <Header />
        </div>
        <div className="mt-[4%] pt-3">
          <Routes>
            <Route path="/" element={<DashboardTwo />} />
            <Route path="/dash-2" element={<DashboardOne />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default index;
