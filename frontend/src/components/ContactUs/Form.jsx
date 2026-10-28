import {useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import endpoints from "../endpoints/endpoints";
import {showSucess,showError} from "../../utils/toastUtils"
const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    description: "",
  });
  const Endpoints=new endpoints()
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUserData(null);
        return;
      }
      try {
        const response = await fetch(Endpoints.LOGIN_USER_FETCH, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data.user);
          setForm((prev) => ({
            ...prev,
            name: data.user.name || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
          }));
        } else {
          setUserData(null);
        }
      } catch (error) {
        setUserData(null);
      }
    };
    fetchUserData();
  }, []);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "* Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(form.name)) {
      newErrors.name = "* Name must contain only letters and spaces";
    }

    if (!form.email) {
      newErrors.email = "* Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "* Enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "* Phone number is required";
    } else if (!/^\d+$/.test(form.phone)) {
      newErrors.phone = "* Phone number must contain only numbers";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "* Enter a valid 10-digit phone number";
    }

    if (!form.enquiry) {
      newErrors.enquiry = "* Please select an enquiry type";
    }

    if (!form.description.trim()) {
      newErrors.description = "* Description cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      try{
      const response = await axios.post(Endpoints.CONTACT_US_URI,{
        name: form.name,
        email: form.email,
        phone: form.phone,
        enquiry: form.enquiry,
        description: form.description,
      })
      if (response.status=200){
      showSucess("Enquiry Sent Successfully")
      setForm({ name: "", email: "", phone: "", enquiry: "", description: "" });
      setErrors({});
      }

      }catch (error) {
        console.error("Error sending form:", error);
        showError("Error sending form. Please try again.");
  
    }
  }
}
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              Name <span className="text-red-500 text-xs text-right">{errors.name}</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              Email <span className="text-red-500 text-xs text-right">{errors.email}</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              Phone <span className="text-red-500 text-xs text-right">{errors.phone}</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              Enquiry About <span className="text-red-500 text-xs text-right">{errors.enquiry}</span>
            </label>
            <select
              name="enquiry"
              value={form.enquiry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm appearance-none"
            >
              <option value="" disabled>Select an option</option>
              <option value="automation">Automation</option>
              <option value="it_services">IT Services</option>
              <option value="solar">Solar Services</option>
              <option value="security">Security Solutions</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-600 mb-1 flex justify-between">
              Description <span className="text-red-500 text-xs text-right">{errors.description}</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition shadow-md"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
