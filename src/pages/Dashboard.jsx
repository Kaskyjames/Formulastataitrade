// src/pages/Dashboard.jsx

import React from "react"; import Navbar from "../components/Navbar";

export default function Dashboard() { return ( <div className="min-h-screen bg-slate-950 text-white px-6 py-12"> <Navbar /> <h1 className="text-4xl font-bold text-center">Client Dashboard</h1> <p className="text-center text-gray-300 mt-4"> Welcome to your AI trading control center. </p> </div> ); }

