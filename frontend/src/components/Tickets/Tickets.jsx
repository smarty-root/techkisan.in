import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { showError, showSucess, showWarn } from "../../utils/toastUtils";
import endpoints from "../endpoints/endpoints";
import axios from "axios";

const Tickets = () => {
const Endpoints = new endpoints();
  const [activeTab, setActiveTab] = useState("Open");
  const [activeCategory, setActiveCategory] = useState("all");
  const [ticketcreatemsg, setTicketCreatemsg] = useState(null);
  const [allTickets, setAllTickets] = useState([]); 
  const [searchQueries, setSearchQueries] = useState({
    ticketNo: "",
    title: "",
    createdDate: "",
    status: "",
    priority: "",
    agentAssigned: "",
  });
  
  // Advanced filtering state
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [Tickets, setTickets] = useState([]);
  const navigator = useNavigate();

  // Initialize form state separately after userData is loaded
  const [addFormData, setAddFormData] = useState({
    subject: "",
    priority: "",
    status: "",
    group: "",
    description: "",
    file: null,
    tags: "",
    User: "",
    name: "",
  });

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleAddFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setAddFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleDelete = (ticketNo) => {
    alert(`Delete ticket: ${ticketNo}`);
  };

  const CreateTicket = async () => {
    try {
      setIsLoading(true);
      const payload = {
        ...addFormData,
        User: userData._id,
        name: userData.name,
      };
      const response = await axios.post(Endpoints.CREATE_TICKET, payload);

      if (response.status === 200) {
        showSucess("Ticket Created Successfully");
        fetchTickets(); // refresh ticket list
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      showError("Error creating ticket. Try again later.");
      setIsLoading(false);
    }
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUserData(null);
      navigator("/login");
      return;
    }
    try {
      const response = await axios.get(Endpoints.LOGIN_USER_FETCH, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setUserData(response.data.user);
      } else {
        setUserData(null);
        navigator("/login");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUserData(null);
      navigator("/login");
    }
  };

  // Filter and sort tickets
  const getFilteredTickets = () => {
    return allTickets.filter(ticket => {
      // Status filter
      if (activeTab !== "All" && ticket.status !== activeTab) return false;
      
      // Category filter
      if (activeCategory === "myTickets" && ticket.userId !== userData._id) return false;
      
      // Search queries filter
      return Object.entries(searchQueries).every(([key, value]) => {
        if (!value) return true;
        const ticketValue = String(ticket[key] || "").toLowerCase();
        return ticketValue.includes(value.toLowerCase());
      });
    });
  };

  // Sort tickets
  const getSortedTickets = (tickets) => {
    if (!sortConfig.key) return tickets;
    
    return [...tickets].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const fetchTickets = async () => {
    if (!userData) return;

    try {
      let response;

      if (activeCategory === "all") {
        response = await axios.get(Endpoints.ALL_TICKET_FETCH);
      } else if (activeCategory === "myTickets") {
        response = await axios.get(Endpoints.MY_TICKET_FETCH, {
          params: { employeeId: userData._id },
        });
      }

      if (response?.data?.tickets) {
        setAllTickets(response.data.tickets);
        setTickets(response.data.tickets.filter(ticket => ticket.status === activeTab));
      } else {
        console.error("Invalid ticket response format", response);
        showError("Failed to fetch tickets");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      showError("Error fetching tickets. Please try again.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigator("/login");
      showWarn("Please login to access this page");
    } else {
      fetchUserData();
    }
  }, []);

  useEffect(() => {
    if (userData) {
      fetchTickets();
      setAddFormData((prev) => ({
        ...prev,
        User: userData._id,
        name: userData.name,
      }));
    }
  }, [userData, activeCategory]);

  const TableBody = ({ tickets, userData, activeTab, handleDelete, formatDate, navigate }) => {
    if (tickets.length === 0) {
      return (
        <tr>
          <td colSpan="7" className="text-center px-4 py-6">
            No tickets found
          </td>
        </tr>
      );
    }

    return tickets.slice().reverse().map((ticket, index) => (
      <tr
        key={index}
        className={`border-t transition duration-300 ease-in-out hover:bg-orange-50 ${
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }`}
      >
        <td className="px-4 py-2 font-medium">{ticket.ticketId}</td>
        <td className="px-4 py-2">{ticket.subject}</td>
        <td className="px-4 py-2">{formatDate(ticket.createdAt)}</td>
        <td className="px-4 py-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-bold ${
              activeTab === "Open"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {activeTab}
          </span>
        </td>
        <td className="px-4 py-2">{ticket.priority}</td>
        <td className="px-4 py-2">{ticket?.assignedToName ?? "Not Assigned Yet"}</td>
        <td className="px-4 py-2 space-x-3">
          {ticket.userId === userData._id ? (
            <>
              <button
                onClick={() => navigate(`/tickets/${ticket.ticketNo}`)}
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => handleDelete(ticket.ticketNo)}
                className="text-red-600 hover:text-red-800 transition"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </>
          ) : null}
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto animate-fade-in">
      <div className="flex justify-end items-center mb-6 w-full">
        <h2 className="text-gray-600 text-md bg-blue-100 px-2 py-1 rounded inline-block">
          <i className="fa-solid fa-user-tie mr-1"></i>{" "}
          {userData?.name ?? "John Smith"}
        </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {["all", "myTickets"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ease-in-out shadow ${
              activeCategory === cat
                ? "bg-[#1976D2] text-white scale-105"
                : "bg-white text-[#1976D2] border border-[#1976D2] hover:bg-[#1976D2] hover:text-white"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "all"
              ? "All Tickets"
              : cat === "myTickets"
              ? "My Tickets"
              : "Assigned Tickets"}
          </button>
        ))}
      </div>

      {/* Tab Switch */}
      <div className="flex gap-4 justify-center mb-4">
        {["Open", "Closed"].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 rounded-lg border text-sm transition duration-300 ease-in-out ${
              activeTab === tab
                ? "bg-[#32DB3A] text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-[#32DB3A] hover:text-white"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setTickets(Tickets.filter((ticket) => ticket.status === tab));
            }}
          >
            <span className="font-bold mr-2">
              {Tickets.filter((ticket) => ticket.status === tab).length}
            </span>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Ticket Table */}
      <div className="overflow-x-auto shadow-xl border border-[#32DB3A] rounded-lg mb-10 max-h-[450px] overflow-y-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-[#32DB3A] text-white sticky top-0 z-10">
            <tr>
              {Object.keys(searchQueries).map((col) => (
                <th key={col} className="px-4 py-2 bg-[#32DB3A]">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold capitalize">{col}</span>
                      <button 
                        className="ml-2 focus:outline-none"
                        onClick={() => {
                          setSortConfig({
                            key: col,
                            direction: sortConfig.key === col && sortConfig.direction === 'ascending' 
                              ? 'descending' 
                              : 'ascending'
                          });
                        }}
                      >
                        {sortConfig.key === col ? (
                          <span>{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                        ) : (
                          <span className="text-gray-300">↕</span>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      <input
                        type="text"
                        className="border px-2 py-1 rounded text-xs w-full text-black focus:outline-none focus:ring-2 focus:ring-[#32DB3A]"
                        placeholder={`Search ${col}...`}
                        value={searchQueries[col]}
                        onChange={(e) =>
                          setSearchQueries((prev) => ({
                            ...prev,
                            [col]: e.target.value,
                          }))
                        }
                      />
                      {searchQueries[col] && (
                        <button
                          className="ml-1 text-red-600 hover:text-red-800"
                          onClick={() =>
                            setSearchQueries((prev) => ({
                              ...prev,
                              [col]: "",
                            }))
                          }
                        >
                          ✖
                        </button>
                      )}
                    </div>
                  </div>
                </th>
              ))}
              <th className="px-4 py-2 bg-[#32DB3A]">Action</th>
            </tr>
          </thead>
          <tbody>
            <TableBody 
              tickets={getSortedTickets(getFilteredTickets())}
              userData={userData}
              activeTab={activeTab}
              handleDelete={handleDelete}
              formatDate={formatDate}
              navigate={navigator}
            />
          </tbody>
        </table>
      </div>

      {/* Form to Submit New Ticket */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-[#1976D2] text-center tracking-wide">
          Add New Ticket
        </h2>

        {ticketcreatemsg && (
          <p className="mb-6 text-green-600 text-center font-medium text-base">
            {ticketcreatemsg}
          </p>
        )}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            CreateTicket();
          }}
        >
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={addFormData.subject}
              onChange={handleAddFormChange}
              required
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2]"
            />
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="priority"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={addFormData.priority}
              onChange={handleAddFormChange}
              required
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2]"
            >
              <option value="" disabled hidden>
                Select priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={addFormData.status}
              onChange={handleAddFormChange}
              required
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2]"
            >
              <option value="" disabled hidden>
                Select status
              </option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          {/* Group */}
          <div>
            <label
              htmlFor="group"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Group
            </label>
            <select
              id="group"
              name="group"
              value={addFormData.group}
              onChange={handleAddFormChange}
              required
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2]"
            >
              <option value="" disabled hidden>
                Select group
              </option>
              <option value="Travel">Travel</option>
              <option value="Payroll">Payroll</option>
              <option value="Admin">Admin</option>
              <option value="IT Supports">IT Support</option>
              <option value="HR">HR</option>
              <option value="Reimbursements">Reimbursement</option>
              <option value="Pocket HRMS">Pocket HRMS</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={addFormData.description}
              onChange={handleAddFormChange}
              required
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2] resize-none min-h-[100px]"
            />
          </div>

          {/* File Upload */}
          <div className="md:col-span-2">
            <label
              htmlFor="file"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Attach File:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".png,.jpg,.jpeg,.doc,.docx,.pdf"
              className="w-full border border-gray-300 rounded-md p-2 text-sm file:mr-2 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#1976D2] file:text-white hover:file:bg-[#155a9c] cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">
              Only PNG, JPG, JPEG, DOC, DOCX, PDF files are allowed.
            </p>
          </div>

          {/* Tags */}
          <div>
            <label
              htmlFor="tags"
              className="block mb-1 font-medium text-gray-700 text-sm"
            >
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              value={addFormData.tags}
              onChange={handleAddFormChange}
              className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-[#1976D2]"
            >
              <option value="" disabled hidden>
                Select tag
              </option>
              <option value="query">Tag Name - Query</option>
              <option value="problem">Tag Name - Problem</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#FF9800] hover:bg-[#fb8c00] text-white font-bold text-base rounded-xl px-10 py-3 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tickets;
