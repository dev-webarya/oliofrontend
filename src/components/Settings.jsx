import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        notifications: true,
        emailUpdates: true,
        twoFactor: false,
        darkMode: false,
    });

    const handleToggle = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
        <div className="settings-page-bg">
            <div className="settings-page-container">
                <button className="back-btn" onClick={() => navigate("/home")}>
                    <i className="fas fa-arrow-left"></i> Back
                </button>

                <h1>Settings</h1>

                <div className="settings-section">
                    <h2>Preferences</h2>
                    <div className="setting-row">
                        <div className="setting-info">
                            <h3>Push Notifications</h3>
                            <p>Receive booking and ride updates</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.notifications}
                            onChange={() => handleToggle("notifications")}
                            className="setting-toggle"
                        />
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h3>Email Updates</h3>
                            <p>Get news and offers via email</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.emailUpdates}
                            onChange={() => handleToggle("emailUpdates")}
                            className="setting-toggle"
                        />
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h3>Two-Factor Authentication</h3>
                            <p>Enhance your account security</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.twoFactor}
                            onChange={() => handleToggle("twoFactor")}
                            className="setting-toggle"
                        />
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <h3>Dark Mode</h3>
                            <p>Switch to dark theme (Coming soon)</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={settings.darkMode}
                            onChange={() => handleToggle("darkMode")}
                            className="setting-toggle"
                            disabled
                        />
                    </div>
                </div>

                <div className="settings-section danger">
                    <h2>Danger Zone</h2>
                    <button className="btn-danger-full">
                        <i className="fas fa-trash"></i> Delete Account
                    </button>
                </div>
            </div>

            <style>{`
        .settings-page-bg {
          min-height: 100vh;
          background: #f3f4f6;
          padding: 20px;
        }
        .settings-page-container {
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
        h1 {
          margin: 0 0 20px 0;
          color: #333;
        }
        .settings-section {
          margin-bottom: 30px;
        }
        .settings-section h2 {
          margin: 0 0 16px 0;
          font-size: 1.1rem;
          color: #333;
        }
        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s;
        }
        .setting-row:hover {
          border-color: #667eea;
          background: #f9fafb;
        }
        .setting-info h3 {
          margin: 0 0 4px 0;
          color: #333;
          font-size: 1rem;
        }
        .setting-info p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }
        .setting-toggle {
          width: 48px;
          height: 28px;
          cursor: pointer;
          accent-color: #667eea;
        }
        .settings-section.danger {
          background: #fef2f2;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #fecaca;
        }
        .settings-section.danger h2 {
          color: #991b1b;
        }
        .btn-danger-full {
          width: 100%;
          padding: 12px;
          background: #ef4444;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-danger-full:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }
        @media (max-width: 600px) {
          .settings-page-container {
            padding: 20px;
          }
          .setting-row {
            padding: 12px;
          }
          .setting-toggle {
            width: 44px;
            height: 24px;
          }
        }
      `}</style>
        </div>
    );
};

export default Settings;