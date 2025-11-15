import React, { useState } from "react";

const ResetPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  // Simulate API
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setMsg("OTP sent to your email.");
    }, 1000);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");
    setTimeout(() => {
      if (otp === "123456") {
        setStep(3);
        setMsg("OTP verified. Please set your new password.");
      } else {
        setError("Invalid OTP. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMsg("");
    if (newPassword !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
      setMsg("Password reset successful! You can now log in.");
      setStep(4);
    }, 1000);
  };

  const handleResendOtp = () => {
    setMsg("OTP resent to your email.");
    setError("");
  };

  return (
    <div className="center-bg">
      <div className="center-card">
        <h2 className="center-title">
          {step === 1 && "Forgot Password"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Reset Password"}
          {step === 4 && "Success"}
        </h2>

        {msg && <div className="center-msg">{msg}</div>}
        {error && <div className="center-error">{error}</div>}

        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <label className="center-label">Email</label>
            <input
              type="email"
              className="center-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="center-btn" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp}>
            <label className="center-label">Enter OTP</label>
            <input
              type="text"
              className="center-input"
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
            <button type="submit" className="center-btn" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              type="button"
              className="center-btn-outline"
              onClick={handleResendOtp}
              disabled={loading}
            >
              Resend OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <label className="center-label">New Password</label>
            <input
              type="password"
              className="center-input"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label className="center-label">Confirm Password</label>
            <input
              type="password"
              className="center-input"
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <button type="submit" className="center-btn" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="center-success">
            <div className="center-success-icon">✔</div>
            <div className="center-success-msg">
              Your password has been reset successfully.
            </div>
            <a
              href="/login"
              className="center-btn"
              style={{ textAlign: "center" }}
            >
              Go to Login
            </a>
          </div>
        )}

        <div className="center-footer">
          <a href="/login" className="center-link">
            Back to Login
          </a>
        </div>
      </div>
      <style>{`
.center-bg {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfc;
}
.center-card {
  width: 400px;
  min-height: 420px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.08);
  padding: 40px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.center-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 28px;
  color: #222;
  letter-spacing: 0.5px;
}
.center-label {
  font-weight: 500;
  margin-bottom: 6px;
  margin-top: 12px;
  color: #444;
  display: block;
}
.center-input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  background: #f6f8fa;
  transition: border 0.2s;
}
.center-input:focus {
  border-color: #3399ff;
  outline: none;
  background: #fff;
}
.center-btn {
  width: 100%;
  background: #007aff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 6px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.center-btn:hover {
  background: #005be8;
}
.center-btn-outline {
  width: 100%;
  background: #fff;
  color: #007aff;
  border: 1px solid #007aff;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.center-btn-outline:hover {
  background: #f0f8ff;
  color: #005be8;
}
.center-msg {
  color: #22c55e;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1rem;
}
.center-error {
  color: #ef4444;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1rem;
}
.center-success {
  text-align: center;
  margin-top: 30px;
}
.center-success-icon {
  color: #22c55e;
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.center-success-msg {
  margin-bottom: 18px;
  font-size: 1.1rem;
}
.center-footer {
  margin-top: 18px;
  text-align: center;
}
.center-link {
  color: #ff9800;
  text-decoration: none;
  font-size: 1rem;
}
.center-link:hover {
  text-decoration: underline;
}
@media (max-width: 500px) {
  .center-card {
    width: 98vw;
    min-width: unset;
    padding: 24px 8px 16px 8px;
  }
}
      `}</style>
    </div>
  );
};

export default ResetPassword;