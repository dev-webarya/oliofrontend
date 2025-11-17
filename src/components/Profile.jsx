import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phone: user?.phone || "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = () => {
        localStorage.setItem("user", JSON.stringify(formData));
        setEditMode(false);
        alert("Profile updated successfully!");
    };

    return (
        <div className="profile-page-bg">
            <div className="profile-page-container">
                <button className="back-btn" onClick={() => navigate("/home")}>
                    <i className="fas fa-arrow-left"></i> Back
                </button>

                <div className="profile-header">
                    <div className="profile-avatar-large">
                        {user?.firstName?.[0]?.toUpperCase() || "U"}
                    </div>
                    <h1>{user?.firstName} {user?.lastName}</h1>
                    <p>{user?.email}</p>
                </div>

                {!editMode ? (
                    <div className="profile-info">
                        <div className="info-field">
                            <label>First Name</label>
                            <p>{formData.firstName}</p>
                        </div>
                        <div className="info-field">
                            <label>Last Name</label>
                            <p>{formData.lastName}</p>
                        </div>
                        <div className="info-field">
                            <label>Email</label>
                            <p>{formData.email}</p>
                        </div>
                        <div className="info-field">
                            <label>Phone</label>
                            <p>{formData.phone || "Not provided"}</p>
                        </div>
                        <button className="btn-edit" onClick={() => setEditMode(true)}>
                            <i className="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>
                ) : (
                    <div className="profile-edit-form">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-actions">
                            <button className="btn-save" onClick={handleSaveProfile}>
                                <i className="fas fa-save"></i> Save Changes
                            </button>
                            <button className="btn-cancel" onClick={() => setEditMode(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .profile-page-bg {
          min-height: 100vh;
          background: #f3f4f6;
          padding: 20px;
        }
        .profile-page-container {
          max-width: 600px;
          margin: 0 auto;
          background: #fff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .back-btn {
          background: none;
          border: none;
          color: #667eea;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 20px;
          transition: all 0.3s;
        }
        .back-btn:hover {
          transform: translateX(-4px);
        }
        .profile-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }
        .profile-avatar-large {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: #fff;
          font-weight: bold;
          margin: 0 auto 15px;
        }
        .profile-header h1 {
          margin: 0;
          color: #333;
        }
        .profile-header p {
          margin: 8px 0 0 0;
          color: #666;
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-field {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 12px;
        }
        .info-field label {
          font-weight: 600;
          color: #666;
          display: block;
          margin-bottom: 6px;
          font-size: 0.9rem;
        }
        .info-field p {
          margin: 0;
          color: #333;
          font-size: 1.05rem;
        }
        .profile-edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          font-weight: 600;
          color: #666;
          margin-bottom: 6px;
          font-size: 0.9rem;
        }
        .form-control {
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .form-control:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }
        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .btn-edit, .btn-save, .btn-cancel {
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-edit, .btn-save {
          background: #667eea;
          color: #fff;
          width: 100%;
          justify-content: center;
        }
        .btn-edit:hover, .btn-save:hover {
          background: #5568d3;
          transform: translateY(-2px);
        }
        .btn-cancel {
          background: #e5e7eb;
          color: #666;
          flex: 1;
          justify-content: center;
        }
        .btn-cancel:hover {
          background: #d1d5db;
        }
        @media (max-width: 600px) {
          .profile-page-container {
            padding: 20px;
          }
          .form-actions {
            flex-direction: column;
          }
          .btn-cancel {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
};

export default Profile;